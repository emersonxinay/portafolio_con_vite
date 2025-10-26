import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Hook para controlar el límite de correos enviados por dispositivo
 * Limita a 3 correos cada 24 horas
 */

const EMAIL_LIMIT_CONFIG = {
  maxEmails: 3,                    // Máximo 3 correos
  resetPeriodHours: 24,            // Se resetea cada 24 horas
  storageKey: 'portfolio_email_limit'
};

export const useEmailLimit = () => {
  const { t } = useTranslation();
  const [emailData, setEmailData] = useState({
    emailsSent: [],
    canSend: true,
    remaining: EMAIL_LIMIT_CONFIG.maxEmails,
    nextResetTime: null
  });

  // Cargar datos de localStorage al montar
  useEffect(() => {
    loadEmailData();
  }, []);

  /**
   * Cargar datos de localStorage y limpiar emails antiguos
   */
  const loadEmailData = () => {
    try {
      const stored = localStorage.getItem(EMAIL_LIMIT_CONFIG.storageKey);

      if (!stored) {
        // Primera vez, inicializar
        const initialData = {
          emailsSent: [],
          canSend: true,
          remaining: EMAIL_LIMIT_CONFIG.maxEmails,
          nextResetTime: null
        };
        setEmailData(initialData);
        return;
      }

      const data = JSON.parse(stored);
      const now = Date.now();
      const resetPeriodMs = EMAIL_LIMIT_CONFIG.resetPeriodHours * 60 * 60 * 1000;

      // Filtrar emails que aún están dentro del período de reset
      const validEmails = data.emailsSent.filter(email => {
        const timeSinceSent = now - email.timestamp;
        return timeSinceSent < resetPeriodMs;
      });

      // Calcular tiempo de reset (basado en el email más antiguo)
      let nextResetTime = null;
      if (validEmails.length > 0) {
        const oldestEmail = validEmails[0];
        nextResetTime = new Date(oldestEmail.timestamp + resetPeriodMs);
      }

      const remaining = EMAIL_LIMIT_CONFIG.maxEmails - validEmails.length;
      const canSend = validEmails.length < EMAIL_LIMIT_CONFIG.maxEmails;

      const updatedData = {
        emailsSent: validEmails,
        canSend,
        remaining: Math.max(0, remaining),
        nextResetTime
      };

      // Guardar datos limpios
      localStorage.setItem(EMAIL_LIMIT_CONFIG.storageKey, JSON.stringify(updatedData));
      setEmailData(updatedData);

    } catch (error) {
      console.error('Error loading email limit data:', error);
      // En caso de error, resetear
      resetLimit();
    }
  };

  /**
   * Registrar que se envió un email
   */
  const recordEmailSent = (emailAddress) => {
    const now = Date.now();
    const newEmail = {
      timestamp: now,
      email: emailAddress
    };

    const updatedEmails = [...emailData.emailsSent, newEmail];
    const remaining = EMAIL_LIMIT_CONFIG.maxEmails - updatedEmails.length;
    const canSend = updatedEmails.length < EMAIL_LIMIT_CONFIG.maxEmails;

    // Calcular próximo reset
    const resetPeriodMs = EMAIL_LIMIT_CONFIG.resetPeriodHours * 60 * 60 * 1000;
    const nextResetTime = new Date(now + resetPeriodMs);

    const updatedData = {
      emailsSent: updatedEmails,
      canSend,
      remaining: Math.max(0, remaining),
      nextResetTime
    };

    localStorage.setItem(EMAIL_LIMIT_CONFIG.storageKey, JSON.stringify(updatedData));
    setEmailData(updatedData);
  };

  /**
   * Resetear límite manualmente (para testing)
   */
  const resetLimit = () => {
    const resetData = {
      emailsSent: [],
      canSend: true,
      remaining: EMAIL_LIMIT_CONFIG.maxEmails,
      nextResetTime: null
    };
    localStorage.setItem(EMAIL_LIMIT_CONFIG.storageKey, JSON.stringify(resetData));
    setEmailData(resetData);
  };

  /**
   * Obtener mensaje de estado para el usuario
   */
  const getStatusMessage = () => {
    if (emailData.canSend) {
      if (emailData.remaining === EMAIL_LIMIT_CONFIG.maxEmails) {
        return t('emailLimit.canSend', { maxEmails: EMAIL_LIMIT_CONFIG.maxEmails });
      } else if (emailData.remaining === 1) {
        return t('emailLimit.lastAvailable');
      } else {
        return t('emailLimit.remaining', { remaining: emailData.remaining });
      }
    } else {
      if (emailData.nextResetTime) {
        const resetTime = new Date(emailData.nextResetTime);
        const hours = resetTime.getHours().toString().padStart(2, '0');
        const minutes = resetTime.getMinutes().toString().padStart(2, '0');
        return t('emailLimit.limitReachedWithTime', { maxEmails: EMAIL_LIMIT_CONFIG.maxEmails, time: `${hours}:${minutes}` });
      }
      return t('emailLimit.limitReached', { maxEmails: EMAIL_LIMIT_CONFIG.maxEmails });
    }
  };

  /**
   * Obtener clase de color según el estado
   */
  const getStatusColor = () => {
    if (!emailData.canSend) return 'text-red-400';
    if (emailData.remaining === 1) return 'text-yellow-400';
    return 'text-green-400';
  };

  return {
    canSend: emailData.canSend,
    remaining: emailData.remaining,
    emailsSent: emailData.emailsSent,
    nextResetTime: emailData.nextResetTime,
    recordEmailSent,
    resetLimit,
    getStatusMessage,
    getStatusColor,
    maxEmails: EMAIL_LIMIT_CONFIG.maxEmails
  };
};
