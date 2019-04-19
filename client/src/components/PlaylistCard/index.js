import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import PlayIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVertRounded';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { deletePlaylist } from '../../store/modules/playlists';
//Temporary
import { deezerAuthPath } from '../../services/auth';
import { DEFAULT_IMAGE_URL } from '../../helpers/constants';
import './styles.scss';

class PlaylistCard extends Component {
  state = {
    anchorEl: null
  };

  //Temporary for testing
  redirectToDeezer = () => {
    window.open(deezerAuthPath(), '_blank', 'height=700,width=700');
  };

  render() {
    const { anchorEl } = this.state;
    const {
      playlist,
      deletePlaylist
    } = this.props;

    return (
      <Card className="card">
        <CardHeader
          title={playlist.name}
          subheader={playlist.isPrivate ? 'Private' : 'Public'}
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
          <MenuItem
            onClick={_ => deletePlaylist(playlist._id)}>
            Delete playlist
          </MenuItem>
        </Menu>
        <CardMedia
          className="card-media"
          image={playlist.coverUrl || DEFAULT_IMAGE_URL}
          title="Album cover" />
        <CardActions disableActionSpacing>
          <IconButton onClick={this.redirectToDeezer}>
            <PlayIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

const mapDispatch = {
  deletePlaylist
};

const enhance = connect(
  null,
  mapDispatch
);

export default enhance(PlaylistCard);
