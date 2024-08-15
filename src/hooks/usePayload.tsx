// libs
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
// types
import type {
  FieldType,
  FilterPayloadType,
  PaginationType,
  SortType,
} from 'components/layout/Home/type';
import type { PayloadType, UsePayloadType } from 'hooks/type';

export const usePayload = (initialPayload: PayloadType): UsePayloadType => {
  const [filterPayload, setFilterPayload] = useState<FilterPayloadType>(initialPayload.filters);
  const [paginationPayload, setPaginationPayload] = useState<PaginationType>(initialPayload.pagination);
  const [sortPayload, setSortPayload] = useState<SortType>(initialPayload.sort);
  const [payload, setPayload] = useState<PayloadType>(initialPayload);

  useEffect(() => {
    setPayload({ filters: filterPayload, pagination: paginationPayload, sort: sortPayload });
  }, [
    filterPayload,
    paginationPayload,
    sortPayload,
  ]);

  const setFilterHandler = (filters: FilterPayloadType) => {
    const newFilter: FilterPayloadType = {
      ...filters,
      category: Array.isArray(filters.category) && filters.category?.length === 0 ? null : filters.category,
      status: Array.isArray(filters.status) && filters.status?.length === 0 ? null : filters.status,
      dateRange: {
        from: filters.dateRange.from === null ? null : format(filters.dateRange.from, 'yyyy-MM-dd'),
        to: filters.dateRange.to === null ? null : format(filters.dateRange.to, 'yyyy-MM-dd'),
      },
    };

    setFilterPayload(newFilter);
    setPaginationPayload({ ...paginationPayload, page: 1 });
  };

  const setSortHandler = ({ field }: FieldType) => {
    if (field === sortPayload.field) {
      if (sortPayload.order === 'asc') {
        setSortPayload({ field, order: 'desc' });
      } else {
        setSortPayload({});
      }
    } else {
      setSortPayload({ field, order: 'asc' });
    }
  };

  const setPaginationHandler = (page: number, pageSize: number) => {
    setPaginationPayload({ page, pageSize });
  };

  return {
    payload, setFilterHandler, setSortHandler, setPaginationHandler,
  };
};
