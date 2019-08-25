import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const init = actionCreator('INIT');
export const increment = actionCreator<number>('INCREMENT');
export const decrement = actionCreator<number>('DECREMENT');
