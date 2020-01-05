import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducer';
import { createLogger } from 'redux-logger';

export const history = createBrowserHistory();

export default function configureStore(preloadedState: object) {

  const middlewares = [
    routerMiddleware(history),
  ];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger({ collapsed: true }));
  }

  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(...middlewares)
    )
  );

  return store;
}
