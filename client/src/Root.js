import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import store from './store';
import theme from './theme';
import AppContainer from './components/AppContainer';
import Auth from './components/Auth';

const Root = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <AppContainer>
        <Router>
          <Switch>
            <Route path="/auth" component={Auth} />
          </Switch>
        </Router>
      </AppContainer>
    </Provider>
  </MuiThemeProvider>
);

export default Root;
