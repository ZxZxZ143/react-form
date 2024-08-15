import React, { type FC } from 'react';
import { Button, Stack } from '@mui/material';
import type { FormProps } from 'components/layout/Home/Filter/type';
import FormControl from 'components/shared/Form/FormControl';
import { useFilterValues } from 'hooks/useFilterValues';

const FilterForm:FC<FormProps> = ({ ...props }) => {
  const {
    names, categories, statuses, productTypes,
  } = useFilterValues();

  return (
    <Stack spacing={2}>
      <FormControl {...props} fieldType="checkbox" label="Status" name="status" options={statuses} />
      <FormControl {...props} fieldType="checkbox" label="Category" name="category" options={categories} />
      <FormControl {...props} fieldType="autocomplete" freeSolo label="Full name" name="fullName" options={names} />
      <FormControl {...props} fieldType="autocomplete" label="Product type" multiple name="productType" options={productTypes} />
      <FormControl {...props} fieldType="date" label="From" name="dateRange.from" />
      <FormControl {...props} fieldType="date" label="To" name="dateRange.to" />
      <Button color="error" type="reset" variant="outlined">reset</Button>
      <Button color="success" type="submit" variant="outlined">apply</Button>
    </Stack>
  );
};

export default FilterForm;
