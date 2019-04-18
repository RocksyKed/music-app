import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import history from './history';
import store from './store';
import theme from './theme';
import AppContainer from './components/AppContainer';
import Auth from './components/Auth';
import Playlists from './components/Playlists';

const Root = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <AppContainer>
          <Switch>
            <Route exact path="/" component={() => <h1>Home</h1>} />
            <Route path="/auth" component={Auth} />
            <Route exact path="/playlists" component={Playlists} />
          </Switch>
        </AppContainer>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

export default Root;
