import type { ElementType } from 'react';

import type { FormikHelpers, FormikValues } from 'formik';

export interface FormProps {
  submit: (values: FormikValues, helpers?: FormikHelpers<FormikValues>) => void;
  initialValues: Record<string, unknown>;
  extraParams?: Record<string, unknown>;
  formFieldsComponent: ElementType;
}

export interface FormikFormProps {
  enableReinitialize: boolean;
  initialValues: FormikValues;
  onSubmit: (values: FormikValues, helpers?: FormikHelpers<FormikValues>) => void;
}
