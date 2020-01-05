import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducer';
import { increment, decrement } from '../../redux/counter/actions';

const Counter: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(1));
  };

  const handleDecrement = () => {
    dispatch(decrement(1));
  };

  return (
    <div>
      <p>{counter.count}</p>
      <button type="button" onClick={handleIncrement}>
        + increment
      </button>
      <button type="button" onClick={handleDecrement}>
        + decrement
      </button>
    </div>
  );
};

export default Counter;
