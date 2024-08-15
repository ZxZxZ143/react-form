// libs
import {
  type FC,
} from 'react';
// components
// config
// hooks
import FilterForm from 'components/layout/Home/Filter/Form';
// ui lib components
// types
import type { FilterProps } from 'components/layout/Home/Filter/type';
import Form from 'components/shared/Form';

const HomeFilter:FC<FilterProps> = ({ onSubmit, initialValues }) => (
  <Form formFieldsComponent={FilterForm} initialValues={initialValues} submit={onSubmit} />
);

export default HomeFilter;
