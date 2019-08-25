import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as actions from '../actions';

export type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

export const counterReducer = reducerWithInitialState(initialState)
  .case(
    actions.increment,
    (state, payload) => ({ ...state,  count: state.count + payload })
  )
  .case(
    actions.decrement,
    (state, payload) => ({ ...state,  count: state.count - payload })
  );
