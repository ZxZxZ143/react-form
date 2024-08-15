// types
import type { FilterPayloadType, PaginationType } from 'components/layout/Home/type';
import type { PayloadType } from 'hooks/type';

export const initialValues: FilterPayloadType = {
  category: null,
  status: null,
  dateRange: {
    from: null,
    to: null,
  },
  fullName: null,
  description: null,
  productType: null,
};

export const initialPagination: PaginationType = {
  page: 1,
  pageSize: 10,
};

export const initialPayload: PayloadType = {
  filters: {},
  sort: {},
  pagination: initialPagination,
};
