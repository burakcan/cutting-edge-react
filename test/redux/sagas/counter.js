import { takeEvery } from 'redux-saga';
import { select, call, put, fork } from 'redux-saga/effects';
import { REQUEST_RESET, requestReset, reset } from 'actions/counter';
import getCount from 'selectors/count';
import counterSaga, { confirmReset } from 'sagas/counter';

describe('counter saga', () => {
  const generator = counterSaga();

  it('Should watch for REQUEST_RESET', () => {
    const next = generator.next();

    expect(next.value).toEqual(
      takeEvery(REQUEST_RESET, confirmReset).next().value
    );
  });

  it('Should fork confirmReset on REQUEST_RESET', () => {
    const next = generator.next(requestReset());

    expect(next.value).toEqual(
      fork(confirmReset, requestReset())
    );
  });

  it("Should continue to watch REQUEST_RESET", () => {
    const next = generator.next();

    expect(next.value).toEqual(
      takeEvery(REQUEST_RESET, confirmReset).next().value
    );
  });
});

describe('confirmReset saga', () => {
  const generator = confirmReset(requestReset('test'));

  it('Should select current value', () => {
    expect(generator.next().value).toEqual(
      select(getCount)
    );
  });

  it('Should call window.confirm', () => {
    expect(generator.next(0).value).toEqual(
      call(confirm, 'Are you sure you want to reset the value: 0')
    );
  });

  it('Should put RESET on confirm', () => {
    expect(generator.next(true).value).toEqual(
      put(reset())
    );
  });

  it('Should exit if user is not confirmed', () => {
    const generator = confirmReset(requestReset('test'));
    generator.next(); //select
    generator.next(); //confirm
    expect(generator.next(false).done).toBe(true);
  });

  it('Should exit', () => {
    expect(generator.next(false).done).toBe(true);
  });
});
