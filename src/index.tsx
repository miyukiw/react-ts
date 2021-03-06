import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'; // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router';
import './index.css';
import configureStore, { history } from './redux/configureStore';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { Router } from 'react-router-dom';

const store = configureStore({});

const dom = (
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router history={history}>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </Router>
      </ConnectedRouter>
  </Provider>
);

ReactDOM.render(
  dom,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
