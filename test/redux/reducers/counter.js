import reducer, { initialState } from 'reducers/counter';
import { increment, decrement, reset } from 'actions/counter';

describe('counter reducer', () => {
  it ('increments', () => {
    const action = increment();
    const nextState = reducer(initialState, action);
    expect(nextState.value).toEqual(initialState.value + 1);
  });

  it ('decrements', () => {
    const action = decrement();
    const nextState = reducer(initialState, action);
    expect(nextState.value).toEqual(initialState.value - 1);
  });

  it ('resets', () => {
    const action = reset();
    const nextState = reducer({ value: 42 }, action);
    expect(nextState.value).toEqual(initialState.value);
  });
});
