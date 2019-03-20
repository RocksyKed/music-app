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

const Register = ({ classes }) => (
  <Card className="register-card-container">
    <CardHeader
      title="Register"
      classes={{ content: classes.headerWrapper }} />
    <CardContent className="register-card-container-content">
      <form className="register-card-container-content-form">
        <TextField
          label="Email"
          variant="outlined"
          placeholder="Email"
          margin="dense" />
        <TextField
          label="Username"
          variant="outlined"
          placeholder="Username"
          margin="dense" />
        <TextField
          label="Password"
          variant="outlined"
          placeholder="Password"
          type="password"
          margin="dense" />
        <TextField
          label="Confirm password"
          variant="outlined"
          placeholder="Confirm password"
          type="password"
          margin="dense" />
        <Button
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
);

const enhance = withStyles(muiStyles);

export default enhance(Register);
