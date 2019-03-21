import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import lodash from 'lodash';

import FieldRenderer from '../../FieldRenderer';
import muiStyles from './muiStyles';
import './styles.scss';

const Register = ({ handleSubmit, classes }) => {
  const onSubmit = formData => {
    const userData = lodash.omit(formData, 'confirmPassword');


  };

  return (
    <Card className="register-card-container">
      <CardHeader
        title="Register"
        classes={{ content: classes.headerWrapper }} />
      <CardContent className="register-card-container-content">
        <form
          className="register-card-container-content-form"
          onSubmit={handleSubmit(onSubmit)}>
          <Field
            name="email"
            label="Email"
            variant="outlined"
            placeholder="Email"
            margin="dense"
            type="email"
            component={FieldRenderer} />
          <Field
            name="username"
            label="Username"
            variant="outlined"
            placeholder="Username"
            margin="dense"
            component={FieldRenderer} />
          <Field
            name="password"
            label="Password"
            variant="outlined"
            placeholder="Password"
            margin="dense"
            type="password"
            component={FieldRenderer} />
          <Field
            name="confirmPassword"
            label="Confirm password"
            variant="outlined"
            placeholder="Confirm password"
            margin="dense"
            type="password"
            component={FieldRenderer} />
          <Button
            type="submit"
            classes={{ root: classes.button }}
            color="secondary"
            variant="contained">
            Register
          </Button>
          <Typography
            align="center"
            variant="subtitle2">
            Already registered?
            &nbsp;
            <Link
              className="register-card-link"
              to="/auth/login">
              Login
            </Link>
          </Typography>
        </form>
      </CardContent>
    </Card>
  )
};

const EMAIL_REGEXP =
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validate = values => ({
  email: !values.email
    ? 'Required'
    : !EMAIL_REGEXP.test(values.email)
      ? 'Email is invalid'
      : null,
  username: !values.username
    ? 'Required'
    : null,
  password: !values.password
    ? 'Required'
    : null,
  confirmPassword: !values.confirmPassword
    ? 'Required'
    : values.password !== values.confirmPassword
      ? 'Passwords doesn\'t match'
      : null
});

const enhance = compose(
  reduxForm({
    form: 'register',
    validate
  }),
  withStyles(muiStyles)
);

export default enhance(Register);
