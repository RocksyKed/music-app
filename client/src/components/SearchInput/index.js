import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/SearchOutlined';

import './styles.scss';

const DELAY = 1000;

class SearchInput extends Component {
  state = {
    value: ''
  };

  onChange = ({ target }) => {
    this.setState({ value: target.value });
    setTimeout(() => {
      //ToDo: change for empty input value (add action in redux)
      if (this.state.value) {
        this.props.onInputChange(this.state.value);
      }
    }, DELAY);
  };

  render() {
    const { value } = this.state;

    return (
      <div className="search-input-container">
        <div className="search-input-container-icon">
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search..."
          value={value}
          onChange={this.onChange} />
      </div>
    )
  }
}

export default SearchInput;
