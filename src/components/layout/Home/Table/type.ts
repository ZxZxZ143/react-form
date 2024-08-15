import type { FieldType, PaginationType, SortType } from 'components/layout/Home/type';
import type { DataType } from 'hooks/type';

export type TableProps = {
  data: DataType[];
  pagination: PaginationType;
  onPaginationChange: (page: number, pageSize: number) => void;
  sortData: SortType;
  setSortHandler: ({ field }: FieldType) => void;
  isLoading?: boolean;
  error?: string;
};
