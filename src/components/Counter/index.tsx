import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../redux/reducer';
import { increment, decrement } from '../../redux/counter/actions';
import { Dispatch } from 'redux';

type StateProps = {
  count: number;
};

type DispatchProps = {
  increment: () => void;
  decrement: () => void;
};

const Counter: React.FC<StateProps & DispatchProps> = (props) => {
  return (
    <div>
      <p>{props.count}</p>
      <button type="button" onClick={props.increment}>
        + increment
      </button>
      <button type="button" onClick={props.decrement}>
        + decrement
      </button>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return ({
    count: state.counter.count,
  });
};

// "dispatch" argument needs an annotation to check the correct shape
//  of an action object when using dispatch function
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  increment: () => {
    dispatch(increment(1));
  },
  decrement: () => {
    dispatch(decrement(1));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
