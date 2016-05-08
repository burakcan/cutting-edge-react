import { createSelector } from 'reselect';

export default createSelector(
  state => state.counter.value,
  result => result
);
