/**
 * Contact Service
 * Handles contact form and subscription API calls
 */

import apiService from './api.service';
import { API_ENDPOINTS } from '../config/api.config';

class ContactService {
  /**
   * Send contact message
   */
  async sendMessage(formData) {
    return apiService.post(API_ENDPOINTS.contact.send, {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      phone: formData.phone || null
    });
  }

  /**
   * Subscribe to newsletter
   */
  async subscribe(email) {
    return apiService.post(API_ENDPOINTS.contact.subscribe, { email });
  }
}

export default new ContactService();
