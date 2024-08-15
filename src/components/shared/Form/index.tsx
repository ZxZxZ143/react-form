import React, { type FC } from 'react';
import type { FormikFormProps, FormProps } from 'components/shared/Form/type';

import {
  Form as FormikForm, Formik, type FormikProps, type FormikValues,
} from 'formik';

const Form: FC<FormProps> = ({
  submit,
  formFieldsComponent,
  initialValues,
  extraParams = {},
}) => {
  const FormFields = formFieldsComponent;

  const formikProps: FormikFormProps = {
    enableReinitialize: true,
    initialValues,
    onSubmit: submit,
  };

  return (
    <Formik {...formikProps}>
      {(props: FormikProps<FormikValues>) => (
        <FormikForm>
          <FormFields {...props} {...extraParams} />
        </FormikForm>
      )}
    </Formik>

  );
};

export default Form;
