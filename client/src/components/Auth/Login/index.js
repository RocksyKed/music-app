import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import muiStyles from './muiStyles';
import './styles.scss';

const Login = ({ classes }) => (
  <Card className="login-card-container">
    <CardHeader
      title="Login"
      classes={{ content: classes.headerWrapper }} />
    <CardContent className="login-card-container-content">
      <form className="login-card-container-content-form">
        <TextField
          label="Email"
          variant="outlined"
          placeholder="Email"
          margin="dense" />
        <TextField
          label="Password"
          variant="outlined"
          placeholder="Password"
          type="password"
          margin="dense" />
        <Button
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

const enhance = withStyles(muiStyles);

export default enhance(Login);
