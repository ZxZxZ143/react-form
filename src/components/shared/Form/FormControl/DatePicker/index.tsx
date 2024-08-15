// libs
import { type FC } from 'react';
// ui lib components
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import type { DatePickerProps } from 'components/shared/Form/FormControl/type';

import { getIn } from 'formik';
// type

const FormDatePicker: FC<DatePickerProps> = ({
  name, label, values, setFieldValue,
}) => {
  const currentState = getIn(values, name);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        onChange={(value: Date | null) => setFieldValue(name, value)}
        value={currentState || null}
      />
    </LocalizationProvider>
  );
};

export default FormDatePicker;
