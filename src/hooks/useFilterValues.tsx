// libs
import { useEffect, useState } from 'react';
// types
import type { DataType, PayloadType, UseFilterValuesType } from 'hooks/type';
// hooks
import { useFetch } from 'hooks/useFetch';
// endpoint
import { API_ENDPOINT } from 'constants/apiEndpoint';

export const useFilterValues = (): UseFilterValuesType => {
  const [categories, setCategories] = useState<string[]>([]);
  const [productTypes, setProductTypes] = useState<string[]>([]);
  const [names, setNames] = useState<string[]>([]);
  const [statuses, setStatuses] = useState<string[]>([]);
  const [payload] = useState<PayloadType>({ filters: {}, pagination: { page: 1, pageSize: 100 }, sort: {} });

  const { data } = useFetch(API_ENDPOINT, payload);

  useEffect(() => {
    if (!data) {
      return;
    }

    const categorySet = new Set<string>();
    const namesTemp = new Set<string>();
    const productSet = new Set<string>();
    const statusSet = new Set<string>();

    data.data.forEach((item: DataType) => {
      categorySet.add(item.category);
      namesTemp.add(item.fullName);
      productSet.add(item.productType);
      statusSet.add(item.status);
    });

    setCategories([...categorySet]);
    setNames([...namesTemp]);
    setProductTypes([...productSet]);
    setStatuses([...statusSet]);
  }, [data]);

  return {
    categories, names, productTypes, statuses,
  };
};
