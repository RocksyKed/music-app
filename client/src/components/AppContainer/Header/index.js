import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import muiStyles from './muiStyles';

import './styles.scss';

const Header = ({ classes }) => (
  <AppBar color="primary" position="sticky">
    <Toolbar>
      <div className="search-container">
        <div className="search-container-icon">
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search..."
          classes={{ input: classes.input }} />
      </div>
    </Toolbar>
  </AppBar>
);

const enhance = withStyles(muiStyles);

export default enhance(Header);
