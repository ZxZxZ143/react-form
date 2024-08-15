// libs
import { type FC } from 'react';
// ui lib components
import { Autocomplete, TextField } from '@mui/material';
import type { AutocompleteType } from 'components/shared/Form/FormControl/type';

import { useField } from 'formik';
// type
import { type FieldHookConfig } from 'formik';

const FormAutocomplete:FC<FieldHookConfig<string | string[]> & AutocompleteType> = ({
  additionalClassName, setFieldValue, setTouched, freeSolo = false, multiple = false, options, label, ...props
}) => {
  const [field, meta] = useField(props);

  const valueConditionHandler = () => {
    if (field.value) {
      return field.value;
    }
    if (multiple) {
      return [];
    }

    return '';
  };

  return (
    <Autocomplete
      {...field}
      className={additionalClassName ?? ''}
      freeSolo={freeSolo}
      getOptionLabel={(option: string | string[]) => option.toString()}
      multiple={multiple ?? false}
      onBlur={() => setTouched({ [field.name]: true })}
      onChange={(_, newValue) => {
        if (!freeSolo) {
          setFieldValue(field.name, newValue.length === 0 ? null : newValue);
        }
      }}
      onInputChange={(_, newValue) => {
        if (freeSolo) {
          setFieldValue(field.name, newValue.length === 0 ? null : newValue);
        }
      }}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
          label={label}
        />
      )}
      value={valueConditionHandler()}
    />
  );
};

export default FormAutocomplete;
