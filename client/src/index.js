import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';

import * as all from './services/users';

import './index.scss';

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

window.userService = all;
