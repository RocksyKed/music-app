import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import muiStyles from './muiStyles';
import './styles.scss';

const Login = ({ classes }) => (
  <Card className="card-container">
    <CardHeader title="Login" />
    <CardContent className="card-container-content">
      <form className="card-container-content-form">
        <TextField
          label="Email"
          variant="outlined"
          placeholder="Email"
          margin="dense" />
        <TextField
          label="Password"
          variant="outlined"
          placeholder="Password"
          margin="dense" />
        <Button
          classes={{ root: classes.button }}
          color="secondary"
          variant="contained">
          Login
        </Button>
      </form>
    </CardContent>
  </Card>
);

const enhance = withStyles(muiStyles);

export default enhance(Login);
