import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import PlaylistCard from '../PlaylistCard';
import CreatePlaylistFormDialog from '../CreatePlaylistFormDialog';
import muiStyles from './muiStyles';

import './styles.scss';

class Playlists extends Component {
  state = {
    showModal: false
  };

  onModalClose = () => {
    this.setState({ showModal: false })
  };

  render() {
    const { classes } = this.props;
    const { showModal } = this.state;

    return (
      <div className="playlists-container">
        <div className="playlists-container-header">
          <div className="playlists-container-header-search">
            <div className="playlists-container-header-search-icon">
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..." />
          </div>
          <Button
            classes={{ root: classes.button }}
            color="secondary"
            variant="contained"
            size="medium"
            onClick={() => {
              this.setState({ showModal: true })
            }}>
            Create new playlist
          </Button>
        </div>
        <div className="playlists-container-list">
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
        </div>
        <CreatePlaylistFormDialog
          open={showModal}
          onClose={this.onModalClose} />
      </div>
    )
  }
}

const enhance = withStyles(muiStyles);

export default enhance(Playlists);
