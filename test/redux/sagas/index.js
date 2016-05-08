import { fork } from 'redux-saga/effects';
import rootSaga from 'sagas';
import counterSaga from 'sagas/counter';

describe('Root saga', () => {
  const generator = rootSaga();

  it('Forks counter saga', () => {
    const next = generator.next();
    expect(next.value).toEqual(fork(counterSaga));
  });

  it('Should exit', () => {
    expect(generator.next().done).toBe(true);
  });
});
