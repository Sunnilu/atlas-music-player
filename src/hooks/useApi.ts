// src/hooks/useApi.ts
import { useState } from 'react';
import { ApiResponse } from 'src/api/types';

const DEFAULT_FETCH_OPTIONS = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export function useApi<T>() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const makeRequest = async (
    url: string,
    options?: RequestInit
  ): Promise<ApiResponse<T>> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        ...DEFAULT_FETCH_OPTIONS,
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return { status: 'success', data };
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      setError(message);
      return { status: 'error', error: message };
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, makeRequest };
}
