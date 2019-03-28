import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const CreatePlaylistFormDialog = ({ onClose, ...rest }) => (
  <Dialog
    onClose={onClose}
    {...rest}>
    <DialogTitle>
      Create new playlist
    </DialogTitle>
    <DialogActions>
      <Button
        variant="outlined"
        color="primary"
        onClick={onClose}>
        Cancel
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={onClose}>
        Save
      </Button>
    </DialogActions>
  </Dialog>
);

export default CreatePlaylistFormDialog;
