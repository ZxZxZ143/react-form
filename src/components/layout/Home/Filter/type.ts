import type { FilterPayloadType } from 'components/layout/Home/type';

import type { FormikProps, FormikValues } from 'formik';

export type FilterProps = {
  onSubmit: (event: FilterPayloadType) => void;
  initialValues: FormikValues;
};

export type FormProps = {
  onSubmit: (event: FilterPayloadType) => void;
  initialValues: FormikValues;
} & FormikProps<FormikValues>;
