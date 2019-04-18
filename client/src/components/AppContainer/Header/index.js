import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { loggedOut } from '../../../store/modules/me';

import muiStyles from './muiStyles';
import './styles.scss';

class Header extends Component {
  state = {
    anchorEl: null
  };

  render() {
    const {
      classes,
      loggedOut
    } = this.props;
    const { anchorEl } = this.state;

    return (
      <AppBar color="primary" position="sticky">
        <Toolbar classes={{ root: classes.toolbar }}>
          <div className="search-container">
            <div className="search-container-icon">
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{ input: classes.input }} />
          </div>
          <div>
            <IconButton
              classes={{ root: classes.accountIcon }}
              onClick={({ target }) => {
                this.setState({ anchorEl: target })
              }}>
              <AccountCircle />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={!!anchorEl}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              onClose={() => {
                this.setState({ anchorEl: null })
              }}>
              <MenuItem onClick={loggedOut}>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

const mapDispatch = {
  loggedOut
};

const enhance = compose(
  connect(
    null,
    mapDispatch
  ),
  withStyles(muiStyles)
);

export default enhance(Header);
