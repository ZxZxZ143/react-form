import type { FormikProps, FormikValues } from 'formik';

type BaseFormElementProps = {
  name: string;
  label?: string;
  className?: string;
  additionalClassName?: string;
  disabled?: boolean;
  placeholder?: string;
} & FormikProps<FormikValues>;

export type AutocompleteType = {
  fieldType: 'autocomplete';
  options: string[];
  label: string;
  additionalClassName?: string;
  multiple?: boolean;
  freeSolo?: boolean;
} & BaseFormElementProps;

export type CheckBoxType = {
  fieldType: 'checkbox';
  options: string[];
} & BaseFormElementProps;

export type DatePickerProps = {
  fieldType: 'date';
  label: string;
  name: string;
} & BaseFormElementProps;

export type FormControlProps = AutocompleteType | CheckBoxType | DatePickerProps;
