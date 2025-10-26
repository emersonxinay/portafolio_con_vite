import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjsService from '../services/emailjs.service';
import { useEmailLimit } from './useEmailLimit';
import toast from 'react-hot-toast';

/**
 * Custom hook for contact form handling with EmailJS and rate limiting
 */
export const useContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Hook de límite de emails
  const emailLimit = useEmailLimit();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contactForm.validation.nameRequired');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contactForm.validation.emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('contactForm.validation.emailInvalid');
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t('contactForm.validation.subjectRequired');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contactForm.validation.messageRequired');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contactForm.validation.messageMinLength');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos
    if (!validate()) {
      toast.error(t('contactForm.validation.formErrors'));
      return;
    }

    // Verificar límite de emails
    if (!emailLimit.canSend) {
      toast.error(emailLimit.getStatusMessage(), {
        duration: 5000,
        icon: '✕',
        style: {
          background: '#1e293b',
          color: '#f1f5f9',
          border: '1px solid #ef4444',
          borderRadius: '0.5rem',
          fontSize: '0.875rem'
        }
      });
      return;
    }

    setLoading(true);

    try {
      // Enviar email usando EmailJS
      const result = await emailjsService.sendEmail(formData);

      if (result.success) {
        // Registrar que se envió un email
        emailLimit.recordEmailSent(formData.email);

        // Formatear fecha y hora del envío
        const now = new Date();
        const dateStr = now.toLocaleDateString('es-PE', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        });
        const timeStr = now.toLocaleTimeString('es-PE', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });

        // Mensaje de éxito con información del límite y timestamp
        const remainingAfter = emailLimit.remaining - 1;
        let successMessage = `${t('contactForm.success.messageSent')}\n\nFecha: ${dateStr}\nHora: ${timeStr}\n\n`;

        // Agregar información sobre email de confirmación
        const hasAutoReply = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID &&
                            import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID !== 'your_autoreply_template_id_here';

        if (hasAutoReply) {
          successMessage += `${t('contactForm.success.confirmationEmail', { email: formData.email })}\n\n`;
        }

        successMessage += t('contactForm.success.willRespond');

        if (remainingAfter > 0) {
          successMessage += `\n\n${t('contactForm.limit.remaining', { count: remainingAfter })}`;
        } else {
          successMessage += `\n\n${t('contactForm.limit.reached')}`;
        }

        toast.success(successMessage, {
          duration: 6000,
          icon: '✓',
          style: {
            whiteSpace: 'pre-line',
            background: '#1e293b',
            color: '#f1f5f9',
            border: '1px solid #3b82f6',
            borderRadius: '0.5rem',
            fontSize: '0.875rem'
          }
        });

        // Reset form
        reset();
      }
    } catch (error) {
      console.error('Error sending email:', error);

      let errorMessage = error.message || t('contactForm.errors.sendFailed');

      // Mensajes de error específicos
      if (errorMessage.includes('not configured')) {
        errorMessage = t('contactForm.errors.notConfigured');
      }

      toast.error(errorMessage, {
        duration: 5000,
        icon: '✕',
        style: {
          background: '#1e293b',
          color: '#f1f5f9',
          border: '1px solid #ef4444',
          borderRadius: '0.5rem',
          fontSize: '0.875rem'
        }
      });
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      phone: ''
    });
    setErrors({});
  };

  return {
    formData,
    loading,
    errors,
    handleChange,
    handleSubmit,
    reset,
    // Exponer datos del límite
    emailLimit: {
      canSend: emailLimit.canSend,
      remaining: emailLimit.remaining,
      statusMessage: emailLimit.getStatusMessage(),
      statusColor: emailLimit.getStatusColor(),
      maxEmails: emailLimit.maxEmails
    }
  };
};
