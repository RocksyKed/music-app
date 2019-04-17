import React, { Component } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import { DEFAULT_IMAGE_URL } from '../../../helpers/constants';
import './styles.scss';

class UploadImageRenderer extends Component {

  state = {
    imageUrl: DEFAULT_IMAGE_URL
  };

  getImageUrlP = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve, _) => {
      reader.onloadend = e =>  resolve(reader.result);
    });
  };

  componentDidUpdate(prevProps) {
    if (
      (!prevProps.input.value && this.props.input.value) ||
      prevProps.input.value.name !== this.props.input.value.name
    ) {
      this.getImageUrlP(this.props.input.value)
        .then(imageUrl => {this.setState({ imageUrl })})
        .catch(console.error);
    }
  };

  render() {
    const {
      input,
      ...restProps
    } = this.props;
    const { imageUrl } = this.state;

    return (
      <label htmlFor="icon-button-file">
        <ButtonBase
          className="cover-container"
          component="span">
          <div className="cover-container-button">
            <input
              {...restProps}
              id="icon-button-file"
              className="cover-container-button-input"
              accept="image/*"
              type="file"
              onChange={e => input.onChange(e.target.files[0])}
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                component="span">
                <PhotoCamera />
              </IconButton>
            </label>
          </div>
          <img
            className="cover-container-image"
            alt="cover"
            src={imageUrl} />
        </ButtonBase>
      </label>
    );
  }

}

export default UploadImageRenderer;
