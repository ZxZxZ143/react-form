// types
import type { FieldType, SortType } from 'components/layout/Home/type';

export type SortableHeadCellProps = {
  field: FieldType;
  sortData: SortType,
  setSortHandler: (field: FieldType) => void,
};
