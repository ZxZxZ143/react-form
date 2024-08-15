// libs
import React, { type FC } from 'react';
// ui lib components
import { TableCell, Tooltip } from '@mui/material';
// types
import type { SortableHeadCellProps } from 'components/layout/Home/Table/SortableHeadCell/type';
// assets
import ArrowUpwardIcon from 'assets/icons/ArrowUpwardIcon.svg?react';
// helpers
import { capitalize } from 'helpers/capitalize';

const HomeTableSortableHeadCell:FC<SortableHeadCellProps> = ({ field, sortData, setSortHandler }) => (
  <Tooltip title={`Sort by ${field}`}>
    <TableCell className="sortable-cell" onClick={() => setSortHandler(field)}>
      {capitalize(field.field)}
      {' '}
      {
        sortData.field === field.field ? (
          <ArrowUpwardIcon
            className={`${sortData.order === 'desc' ? 'downwards' : ''} icon`}
          />
        ) : null
      }
    </TableCell>
  </Tooltip>
);

export default HomeTableSortableHeadCell;
