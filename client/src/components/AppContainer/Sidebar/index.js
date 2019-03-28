import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

import './styles.scss';

const Sidebar = ({ className }) => (
  <div className={`${className} sidebar-container`}>
    <div>
      <Typography
        color="primary"
        align="center"
        variant="subtitle1">
        Music App
      </Typography>
    </div>
    <MenuList>
      <NavLink exact to="/">
        <MenuItem>
          Home
        </MenuItem>
      </NavLink>
      <NavLink exact to="/playlists">
        <MenuItem>
          Playlists
        </MenuItem>
      </NavLink>
    </MenuList>
  </div>
);

export default Sidebar;
