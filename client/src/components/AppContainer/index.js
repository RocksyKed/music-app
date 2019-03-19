import React, { Component } from 'react';

import Header from './Header';
import SideBar from './Sidebar';

import './styles.scss';

class AppContainer extends Component {

  render() {
    const { children } = this.props;

    return (
      0
        ? (
          <div className="app-container">
            <div className="app-container-sidebar">
              <SideBar />
            </div>
            <div className="app-container-content">
              <Header />
              {children}
            </div>
          </div>
        )
        : children
    )
  }
}

export default AppContainer;
