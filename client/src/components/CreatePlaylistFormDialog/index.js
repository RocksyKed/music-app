import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

import { reduxForm, Field } from 'redux-form';
import { SwitchRenderer, FieldRenderer } from '../FieldRenderer';
import UploadImageRenderer from '../FieldRenderer/ImageUpload';

import './styles.scss';

const CreatePlaylistFormDialog = ({ handleSubmit, onClose, open, maxWidth }) => (
  <Dialog
    fullWidth
    onClose={onClose}
    open={open}
    maxWidth={maxWidth}>
    <DialogTitle>
      Create new playlist
    </DialogTitle>
    <form onSubmit={handleSubmit}>
      <DialogContent className="create-playlist">
        <div className="create-playlist-cover">
          <Field
            name="file"
            component={UploadImageRenderer} />
        </div>
        <div className="create-playlist-info">
          <Field
            name="name"
            label="Name"
            placeholder="Name"
            margin="normal"
            variant="standard"
            required
            component={FieldRenderer} />
          <Field
            name="isPrivate"
            label="Private"
            color="secondary"
            component={SwitchRenderer} />
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          color="primary"
          onClick={onClose}>
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="secondary">
          Save
        </Button>
      </DialogActions>
    </form>
  </Dialog>
);

const validate = values => ({
  name: !values.name
    ? 'Required'
    : null
});

const enhance = reduxForm({
  form: 'createPlaylist',
  initialValues: {
    isPrivate: false,
    file: null
  },
  validate
});

export default enhance(CreatePlaylistFormDialog);
