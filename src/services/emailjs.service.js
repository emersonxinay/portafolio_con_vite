/**
 * EmailJS Service
 * Handles email sending through EmailJS
 */

import emailjs from '@emailjs/browser';

class EmailJSService {
  constructor() {
    this.serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    this.templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
    this.autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID || '';
    this.publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
    this.initialized = false;
  }

  /**
   * Inicializar EmailJS
   */
  init() {
    if (!this.serviceId || !this.templateId || !this.publicKey) {
      console.warn('⚠️ EmailJS credentials not configured. Please add them to .env');
      return false;
    }

    try {
      emailjs.init(this.publicKey);
      this.initialized = true;
      return true;
    } catch (error) {
      console.error('Error initializing EmailJS:', error);
      return false;
    }
  }

  /**
   * Enviar email usando EmailJS
   * @param {Object} formData - Datos del formulario
   * @returns {Promise}
   */
  async sendEmail(formData) {
    // Inicializar si no está inicializado
    if (!this.initialized) {
      const success = this.init();
      if (!success) {
        throw new Error('EmailJS not configured. Please add credentials to .env file.');
      }
    }

    try {
      // Preparar los parámetros del template principal
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Mensaje desde portafolio',
        message: formData.message,
        phone: formData.phone || 'No proporcionado',
        to_email: 'xinayespinoza@gmail.com', // Tu email
        reply_to: formData.email
      };

      console.log('Sending email with params:', { ...templateParams, message: '[hidden]' });

      // Enviar email principal a xinayespinoza@gmail.com
      const response = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams,
        this.publicKey
      );

      console.log('Email sent successfully:', response);

      // Enviar auto-respuesta al remitente (si está configurado)
      if (this.autoReplyTemplateId) {
        try {
          await this.sendAutoReply(formData);
          console.log('Auto-reply sent successfully');
        } catch (autoReplyError) {
          // No fallar si la auto-respuesta falla
          console.warn('Auto-reply failed, but main email was sent:', autoReplyError);
        }
      }

      return {
        success: true,
        message: 'Email enviado exitosamente',
        data: response,
        timestamp: new Date().toISOString()
      };

    } catch (error) {
      console.error('Error sending email:', error);

      let errorMessage = 'Error al enviar el email. Por favor intenta nuevamente.';

      if (error.text) {
        errorMessage = `Error: ${error.text}`;
      } else if (error.message) {
        errorMessage = error.message;
      }

      throw {
        success: false,
        message: errorMessage,
        error
      };
    }
  }

  /**
   * Enviar email de confirmación al remitente
   * @param {Object} formData - Datos del formulario
   * @returns {Promise}
   */
  async sendAutoReply(formData) {
    if (!this.autoReplyTemplateId) {
      console.log('Auto-reply template not configured, skipping');
      return;
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('es-PE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const timeStr = now.toLocaleTimeString('es-PE', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    // Parámetros para el email de confirmación
    const autoReplyParams = {
      to_email: formData.email,
      to_name: formData.name,
      subject: formData.subject || 'Mensaje desde portafolio',
      message: formData.message,
      phone: formData.phone || 'No proporcionado',
      sent_date: dateStr,
      sent_time: timeStr,
      reply_to: 'xinayespinoza@gmail.com'
    };

    console.log('Sending auto-reply to:', formData.email);

    const response = await emailjs.send(
      this.serviceId,
      this.autoReplyTemplateId,
      autoReplyParams,
      this.publicKey
    );

    return response;
  }

  /**
   * Validar configuración de EmailJS
   */
  validateConfig() {
    return {
      hasServiceId: !!this.serviceId,
      hasTemplateId: !!this.templateId,
      hasAutoReplyTemplateId: !!this.autoReplyTemplateId,
      hasPublicKey: !!this.publicKey,
      isConfigured: !!this.serviceId && !!this.templateId && !!this.publicKey,
      hasAutoReply: !!this.autoReplyTemplateId
    };
  }

  /**
   * Obtener información de configuración (para debugging)
   */
  getConfigInfo() {
    const config = this.validateConfig();
    return {
      ...config,
      serviceId: this.serviceId ? `${this.serviceId.substring(0, 10)}...` : 'not set',
      templateId: this.templateId ? `${this.templateId.substring(0, 10)}...` : 'not set',
      autoReplyTemplateId: this.autoReplyTemplateId ? `${this.autoReplyTemplateId.substring(0, 10)}...` : 'not set',
      publicKey: this.publicKey ? `${this.publicKey.substring(0, 10)}...` : 'not set'
    };
  }
}

export default new EmailJSService();
