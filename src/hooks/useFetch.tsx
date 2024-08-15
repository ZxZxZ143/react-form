// libs
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
// types
import type { PayloadType, ResType, UseFetchType } from 'hooks/type';

export const useFetch = (url: string, payload: PayloadType): UseFetchType => {
  const [data, setData] = useState<ResType>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const { data: resData } = await axios.post(url, payload) as UseFetchType;

      setData(resData);
    } catch (err: unknown) {
      setError('Failed to fetch data.');
    } finally {
      setLoading(false);
    }
  }, [payload, url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading };
};
