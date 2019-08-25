import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { CounterState, counterReducer } from './counter/reducers';

export type RootState = Readonly<{
  router: any; // TODO
  counter: CounterState;
}>;

const createRootReducer = (history: History) => combineReducers<RootState>({
  router: connectRouter(history),
  counter: counterReducer,
});

export default createRootReducer;
