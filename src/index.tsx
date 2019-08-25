import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'; // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router';
import './index.css';
import configureStore, { history } from './redux/configureStore';
import * as serviceWorker from './serviceWorker';
import App from './App';

const store = configureStore({});

const renderApp = () => (<App />);
const renderNotFound = () => (<div>Not Found</div>);

const dom = (
  <Provider store={store}>
      <ConnectedRouter history={history}> {/* place ConnectedRouter under Provider */}
      <> {/* your usual react-router v4/v5 routing */}
          <Switch>
              <Route exact={true} path="/" render={renderApp} />
              <Route render={renderNotFound} />
          </Switch>
      </>
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
