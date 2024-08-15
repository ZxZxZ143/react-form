import type {
  FieldType, FilterPayloadType, PaginationType, SortType,
} from 'components/layout/Home/type';

export type PayloadType = {
  filters?: FilterPayloadType;
  sort?: SortType;
  pagination?: PaginationType;
};

export type DataType = {
  id: number;
  fullName: string;
  description: string;
  category: string;
  productType: string;
  status: string;
  date: string;
};

export type UseFetchType = {
  data: ResType;
  loading: boolean;
  error: string;
};

export type ResType = {
  data: DataType[],
  sort: SortType,
  pagination: PaginationType
};

export type UseFilterValuesType = {
  categories: string[];
  names: string[];
  productTypes: string[];
  statuses: string[];
};

export type UsePayloadType = {
  payload: PayloadType;
  setFilterHandler: (filters: FilterPayloadType) => void;
  setSortHandler: (field: FieldType) => void;
  setPaginationHandler: (page: number, pageSize: number) => void;
};
