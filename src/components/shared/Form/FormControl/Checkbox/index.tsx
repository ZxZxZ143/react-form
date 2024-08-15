// libs
import { type FC } from 'react';
// ui lib components
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputLabel,
} from '@mui/material';
import type { CheckBoxType } from 'components/shared/Form/FormControl/type';
import { capitalize } from 'helpers/capitalize';

import { getIn } from 'formik';
// type

const FormCheckbox:FC<CheckBoxType> = ({
  values, label, options, name, handleChange,
}) => {
  const currentValues: string[] = getIn(values, name) || [];

  return (
    <FormGroup className="status-container">
      <InputLabel>{label}</InputLabel>
      {
          options.map((item) => (
            <FormControlLabel
              key={item}
              control={
                <Checkbox checked={currentValues.includes(item)} name={name} onChange={handleChange} value={item} />
                  }
              label={capitalize(item)}
            />
          ))
        }

    </FormGroup>
  );
};

export default FormCheckbox;
