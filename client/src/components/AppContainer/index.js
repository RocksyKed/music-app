import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import SideBar from './Sidebar';
import { getMe } from '../../store/modules/me';

import './styles.scss';

class AppContainer extends Component {
  componentDidMount() {
    this.props.getMe();
  }

  render() {
    const {
      children,
      isLoggedIn,
      isLoading
    } = this.props;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return isLoggedIn
      ? (
        <div className="app-container">
          <SideBar className="app-container-sidebar" />
          <div className="app-container-content">
            <Header />
            {children}
          </div>
        </div>
      )
      : children;
  }
}

const mapState = state => ({
  isLoading: state.me.isLoading,
  isLoggedIn: state.me.isLoggedIn
});

const enhance =
  compose(
    withRouter,
    connect(
      mapState,
      { getMe }
    )
  );

export default enhance(AppContainer);
