import React, { Component } from 'react';
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

class Register extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  };

  createOnChange = fieldName =>
    ev => {
      this.setState({
        [fieldName]: ev.target.value
      });
    };

  onSubmit = () => {
    const {
      email,
      username,
      password,
      confirmPassword
    } = this.state;

    if (!email) {
      alert('Email field is empty!');
    } else if (!username) {
      alert('Username field is empty!');
    } else if (!password) {
      alert('Password field is empty!');
    } else if (!confirmPassword) {
      alert('Confirm password field is empty!');
    } else if (password !== confirmPassword) {
      alert('Passwords don\'t match!');
    }
  };

  render() {
    const { classes } = this.props;
    const {
      email,
      username,
      password,
      confirmPassword
    } = this.state;

    return (
      <Card className="register-card-container">
        <CardHeader
          title="Register"
          classes={{ content: classes.headerWrapper }} />
        <CardContent className="register-card-container-content">
          <form className="register-card-container-content-form">
            <TextField
              required
              label="Email"
              variant="outlined"
              placeholder="Email"
              margin="dense"
              type="email"
              value={email}
              onChange={this.createOnChange('email')} />
            <TextField
              required
              label="Username"
              variant="outlined"
              placeholder="Username"
              margin="dense"
              value={username}
              onChange={this.createOnChange('username')} />
            <TextField
              required
              label="Password"
              variant="outlined"
              placeholder="Password"
              type="password"
              margin="dense"
              value={password}
              onChange={this.createOnChange('password')} />
            <TextField
              required
              label="Confirm password"
              variant="outlined"
              placeholder="Confirm password"
              type="password"
              margin="dense"
              value={confirmPassword}
              onChange={this.createOnChange('confirmPassword')} />
            <Button
              classes={{ root: classes.button }}
              color="secondary"
              variant="contained"
              onClick={this.onSubmit}>
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
  }
}

const enhance = withStyles(muiStyles);

export default enhance(Register);
