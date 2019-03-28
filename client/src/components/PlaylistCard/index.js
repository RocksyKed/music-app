import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import PlayIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVertRounded';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import './styles.scss';

class PlaylistCard extends Component {
  state = {
    anchorEl: null
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <Card className="card">
        <CardHeader
          title="Rock"
          subheader="Public"
          action={
            <IconButton
              onClick={({ target }) => {
                this.setState({ anchorEl: target });
              }}>
              <MoreVertIcon />
            </IconButton>
          } />
        <Menu
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={() => {
            this.setState({ anchorEl: null });
          }}>
          <MenuItem>
            Delete playlist
          </MenuItem>
        </Menu>
        <CardMedia
          className="card-media"
          image="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/48.jpg"
          title="Album cover" />
        <CardActions disableActionSpacing>
          <IconButton>
            <PlayIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default PlaylistCard;
