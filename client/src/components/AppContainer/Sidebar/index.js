import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import PlaylistIcon from '@material-ui/icons/QueueMusicOutlined';

import muiStyles from './muiStyles';
import './styles.scss';

const Sidebar = ({ className, classes }) => (
  <div className={`${className} sidebar-container`}>
    <div className="sidebar-container-logo">
      <Typography
        classes={{ root: classes.logoText }}
        align="center"
        variant="h6">
        Music App
      </Typography>
    </div>
    <MenuList>
      <NavLink
        exact to="/"
        className="sidebar-container-list-link">
        <MenuItem>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            inset
            primary="Home" />
        </MenuItem>
      </NavLink>
      <NavLink
        exact to="/playlists"
        className="sidebar-container-list-link">
        <MenuItem>
          <ListItemIcon>
            <PlaylistIcon />
          </ListItemIcon>
          <ListItemText
            inset
            primary="Playlists" />
        </MenuItem>
      </NavLink>
    </MenuList>
  </div>
);

const enhance = withStyles(muiStyles);

export default enhance(Sidebar);
