/**
 * API Service
 * Handles all HTTP requests to the backend API
 */

import { API_CONFIG, getHeaders, HTTP_STATUS } from '../config/api.config';

class ApiService {
  constructor() {
    this.baseURL = API_CONFIG.baseURL;
    this.timeout = API_CONFIG.timeout;
  }

  /**
   * Generic request handler with timeout and error handling
   */
  async request(endpoint, options = {}) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const url = `${this.baseURL}${endpoint}`;
      const config = {
        ...options,
        headers: {
          ...getHeaders(options.includeAuth),
          ...options.headers
        },
        signal: controller.signal
      };

      const response = await fetch(url, config);
      clearTimeout(timeoutId);

      // Handle different response types
      if (response.status === HTTP_STATUS.NO_CONTENT) {
        return { success: true };
      }

      const data = await response.json();

      if (!response.ok) {
        throw {
          status: response.status,
          message: data.message || 'An error occurred',
          data
        };
      }

      return { success: true, data };
    } catch (error) {
      clearTimeout(timeoutId);

      if (error.name === 'AbortError') {
        throw {
          status: 408,
          message: 'Request timeout',
          isTimeout: true
        };
      }

      throw {
        status: error.status || 500,
        message: error.message || 'Network error',
        data: error.data
      };
    }
  }

  /**
   * GET request
   */
  async get(endpoint, options = {}) {
    return this.request(endpoint, {
      method: 'GET',
      ...options
    });
  }

  /**
   * POST request
   */
  async post(endpoint, body, options = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
      ...options
    });
  }

  /**
   * PUT request
   */
  async put(endpoint, body, options = {}) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body),
      ...options
    });
  }

  /**
   * PATCH request
   */
  async patch(endpoint, body, options = {}) {
    return this.request(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(body),
      ...options
    });
  }

  /**
   * DELETE request
   */
  async delete(endpoint, options = {}) {
    return this.request(endpoint, {
      method: 'DELETE',
      ...options
    });
  }
}

export default new ApiService();
