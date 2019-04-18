import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';

import PlaylistCard from '../PlaylistCard';
import CreatePlaylistFormDialog from '../CreatePlaylistFormDialog';
import { getPlaylists, addPlaylist } from '../../store/modules/playlists';

import muiStyles from './muiStyles';
import './styles.scss';

class Playlists extends Component {
  state = {
    showModal: false
  };

  componentDidMount() {
    this.props.getPlaylists();
  }

  onModalClose = () => {
    this.setState({ showModal: false })
  };

  addNewPlaylist = data => {
    this.props.addPlaylist(data);
    this.onModalClose();
  };

  render() {
    const {
      classes,
      playlists
    } = this.props;
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
          {
            playlists.length
              ? playlists.map(playlist => (
                  <PlaylistCard
                    key={playlist._id}
                    playlist={playlist} />
                ))
              : (
                <Typography variant="subtitle1">
                  No playlists yet
                </Typography>
              )
          }
        </div>
        <CreatePlaylistFormDialog
          open={showModal}
          maxWidth="md"
          onSubmit={this.addNewPlaylist}
          onClose={this.onModalClose} />
      </div>
    )
  }
}

const mapState = state => ({
  playlists: state.playlists.list
});

const mapDispatch = {
  getPlaylists,
  addPlaylist
};

const enhance = compose(
  connect(
    mapState,
    mapDispatch
  ),
  withStyles(muiStyles)
);

export default enhance(Playlists);
