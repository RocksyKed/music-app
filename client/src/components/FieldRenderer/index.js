import React from 'react';
import TextField from '@material-ui/core/TextField';

const FieldRenderer = props => {
  const {
    input,
    meta: { touched, invalid, error },
    ...restProps
  } = props;

  return (
    <TextField
      {...input}
      error={touched && invalid}
      helperText={touched && error}
      {...restProps} />
  );
};

export default FieldRenderer;
