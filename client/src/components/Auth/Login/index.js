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

import FieldRenderer from '../../FieldRenderer';
import muiStyles from './muiStyles';
import './styles.scss';

const Login = ({ handleSubmit, classes }) => {

  return (
    <Card className="login-card-container">
      <CardHeader
        title="Login"
        classes={{ content: classes.headerWrapper }} />
      <CardContent className="login-card-container-content">
        <form
          className="login-card-container-content-form"
          onSubmit={handleSubmit(console.log)}>
          <Field
            name="email"
            label="Email"
            variant="outlined"
            placeholder="Email"
            margin="dense"
            component={FieldRenderer} />
          <Field
            name="password"
            label="Password"
            variant="outlined"
            placeholder="Password"
            type="password"
            margin="dense"
            component={FieldRenderer} />
          <Button
            type="submit"
            classes={{ root: classes.button }}
            color="secondary"
            variant="contained">
            Login
          </Button>
          <Typography
            align="center"
            variant="subtitle2">
            Not register yet?
            &nbsp;
            <Link
              to="/auth/register"
              className="login-card-link">
              Register
            </Link>
          </Typography>
        </form>
      </CardContent>
    </Card>
  );
};

const EMAIL_REGEXP =
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validate = values => ({
  email: !values.email
    ? 'Required'
    : !EMAIL_REGEXP.test(values.email)
      ? 'Invalid email address'
      : null,
  password: !values.password
    ? 'Required'
    : null
});

const enhance = compose(
  reduxForm({
    form: 'login',
    validate
  }),
  withStyles(muiStyles)
);

export default enhance(Login);
