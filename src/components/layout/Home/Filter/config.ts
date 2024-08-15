import type { FilterPayloadType } from 'components/layout/Home/type';

export const INITIAL_VALUES: FilterPayloadType = {
  category: [],
  status: [],
  dateRange: {
    from: null,
    to: null,
  },
  fullName: '',
  productType: [],
};
