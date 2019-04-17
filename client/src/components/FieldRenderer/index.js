import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export const FieldRenderer = props => {
  const {
    input,
    meta: { touched, invalid, error },
    ...restProps
  } = props;

  return (
    <TextField
      {...restProps}
      {...input}
      error={touched && invalid}
      helperText={touched && error} />
  );
};

export const SwitchRenderer = props => {
  const {
    input,
    label,
    ...restProps
  } = props;

  return (
    <FormControlLabel
      control={
        <Switch
          {...restProps}
          checked={!!input.value}
          onChange={input.onChange} />
      }
      label={label} />
  );
};
