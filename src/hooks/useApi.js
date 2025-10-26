import { useState, useEffect, useCallback } from 'react';
import { API_CONFIG } from '../config/api.config';

/**
 * Custom hook for API calls with loading, error and data states
 * @param {Function} apiFunction - The API function to call
 * @param {*} initialData - Initial data value
 * @param {boolean} immediate - Whether to call API immediately on mount
 */
export const useApi = (apiFunction, initialData = null, immediate = true) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(
    async (...params) => {
      try {
        setLoading(true);
        setError(null);

        // If using mock data, load from local files
        if (API_CONFIG.useMockData) {
          // Simulate API delay
          await new Promise(resolve => setTimeout(resolve, 500));

          // Return mock data (will be handled by each service)
          const result = await apiFunction(...params);
          setData(result.data);
          return result;
        }

        const result = await apiFunction(...params);
        setData(result.data);
        return result;
      } catch (err) {
        setError({
          message: err.message || 'An error occurred',
          status: err.status || 500,
          data: err.data
        });
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [apiFunction]
  );

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return {
    data,
    loading,
    error,
    execute,
    setData
  };
};

/**
 * Hook for projects API
 */
export const useProjects = (immediate = true) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (immediate) {
      if (API_CONFIG.useMockData) {
        // Load from local data
        import('../data/projectsData').then(module => {
          setProjects(module.projectsData || module.default);
          setLoading(false);
        });
      } else {
        // Load from API
        setLoading(true);
        import('../services/projects.service').then(module => {
          module.default.getAll()
            .then(response => {
              setProjects(response.data);
              setLoading(false);
            })
            .catch(err => {
              setError(err);
              setLoading(false);
            });
        });
      }
    }
  }, [immediate]);

  return { projects, loading, error };
};

/**
 * Hook for tech stack API
 */
export const useTechStack = (immediate = true) => {
  const [techStack, setTechStack] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (immediate) {
      if (API_CONFIG.useMockData) {
        // Load from local data
        import('../data/techStackData').then(module => {
          setTechStack(module.techStack);
          setLoading(false);
        });
      } else {
        // Load from API
        setLoading(true);
        import('../services/api.service').then(apiModule => {
          apiModule.default.get('/tech-stack')
            .then(response => {
              setTechStack(response.data);
              setLoading(false);
            })
            .catch(err => {
              setError(err);
              setLoading(false);
            });
        });
      }
    }
  }, [immediate]);

  return { techStack, loading, error };
};

/**
 * Hook for experience API
 */
export const useExperience = (immediate = true) => {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (immediate) {
      if (API_CONFIG.useMockData) {
        // Load from local data
        import('../data/experienceData').then(module => {
          setExperience(module.professionalAchievements || []);
          setLoading(false);
        });
      } else {
        // Load from API
        setLoading(true);
        import('../services/api.service').then(apiModule => {
          apiModule.default.get('/experience')
            .then(response => {
              setExperience(response.data);
              setLoading(false);
            })
            .catch(err => {
              setError(err);
              setLoading(false);
            });
        });
      }
    }
  }, [immediate]);

  return { experience, loading, error };
};
