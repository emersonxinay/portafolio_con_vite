/**
 * Projects Service
 * Handles all project-related API calls
 */

import apiService from './api.service';
import { API_ENDPOINTS } from '../config/api.config';

class ProjectsService {
  /**
   * Get all projects
   */
  async getAll() {
    return apiService.get(API_ENDPOINTS.projects.getAll);
  }

  /**
   * Get project by ID
   */
  async getById(id) {
    return apiService.get(API_ENDPOINTS.projects.getById(id));
  }

  /**
   * Get featured projects
   */
  async getFeatured() {
    return apiService.get(API_ENDPOINTS.projects.getFeatured);
  }

  /**
   * Get projects by category
   */
  async getByCategory(category) {
    return apiService.get(API_ENDPOINTS.projects.getByCategory(category));
  }

  /**
   * Create new project (admin)
   */
  async create(projectData) {
    return apiService.post(API_ENDPOINTS.projects.create, projectData, {
      includeAuth: true
    });
  }

  /**
   * Update project (admin)
   */
  async update(id, projectData) {
    return apiService.put(API_ENDPOINTS.projects.update(id), projectData, {
      includeAuth: true
    });
  }

  /**
   * Delete project (admin)
   */
  async delete(id) {
    return apiService.delete(API_ENDPOINTS.projects.delete(id), {
      includeAuth: true
    });
  }
}

export default new ProjectsService();
