export type FilterPayloadType = {
  category?: string[];
  status?: string[];
  fullName?: string;
  dateRange?: {
    from: string;
    to: string;
  };
  description?: string[];
  productType?: string[];
};

export type SortType = {
  order?: 'asc' | 'desc';
} & FieldType;

export type FieldType = {
  field?: 'id' | 'fullName' | 'date';
};

export type PaginationType = {
  page: number;
  pageSize: number;
  totalRecords?: number;
};
