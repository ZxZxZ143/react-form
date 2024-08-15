// libs
import { type FC } from 'react';
// ui lib components
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import HomeTableSortableHeadCell from 'components/layout/Home/Table/SortableHeadCell';
// types
import type { TableProps } from 'components/layout/Home/Table/type';
import type { FieldType } from 'components/layout/Home/type';
// constants
import { PAGE_SIZE_VARIATIONS, pageSizeXs } from 'constants/pageSizeVariations';

import { format } from 'date-fns';

const HomeTable: FC<TableProps> = ({
  data,
  pagination,
  onPaginationChange,
  sortData,
  setSortHandler,
}) => (
  <Paper className="table-layout">
    <TableContainer className="table">
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {
              ([
                { field: 'id' },
                { field: 'fullName' },
                { field: 'date' },
              ] as FieldType[]).map((item) => (
                <HomeTableSortableHeadCell key={item.field} field={item} setSortHandler={setSortHandler} sortData={sortData} />
              ))
            }
            <TableCell>Product type</TableCell>
            <TableCell>Specialization</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
                        data?.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>
                              {item.fullName}
                            </TableCell>
                            <TableCell>
                              {
                                        format(item.date, 'dd-MM-yyyy')
                                    }
                            </TableCell>
                            <TableCell>{item.productType}</TableCell>
                            <TableCell>{item.description}</TableCell>
                            <TableCell>{item.category}</TableCell>
                            <TableCell>{item.status}</TableCell>
                          </TableRow>
                        ))
                    }
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      component="div"
      count={pagination ? pagination.totalRecords : 0}
      onPageChange={(_, newPage) => onPaginationChange(newPage + 1, pagination?.pageSize)}
      onRowsPerPageChange={(event) => onPaginationChange(1, Number(event.target.value))}
      page={pagination ? pagination.page - 1 : 0}
      rowsPerPage={pagination ? pagination.pageSize : pageSizeXs}
      rowsPerPageOptions={PAGE_SIZE_VARIATIONS}
    />
  </Paper>
);

export default HomeTable;
