import React, { type FC } from 'react';
import AutocompleteText from 'components/shared/Form/FormControl/AutocompleteText';
import FormCheckbox from 'components/shared/Form/FormControl/Checkbox';
import DatePicker from 'components/shared/Form/FormControl/DatePicker';
import type { FormControlProps } from 'components/shared/Form/FormControl/type';

const FormControl: FC<FormControlProps> = ({ ...props }) => {
  const renderField = () => {
    switch (props.fieldType) {
      case 'date':
        return <DatePicker {...props} />;

      case 'checkbox':
        return <FormCheckbox {...props} />;

      case 'autocomplete':
        return <AutocompleteText {...props} />;

      default:
        return null;
    }
  };

  return <>{renderField()}</>;
};

export default FormControl;
