import { takeEvery } from 'redux-saga';
import { select, call, put } from 'redux-saga/effects';
import { REQUEST_RESET, reset } from 'actions/counter';
import getCount from 'selectors/count';

export function *confirmReset() {
  const value = yield select(getCount);
  const confirmed = yield call(
    confirm,
    `Are you sure you want to reset the value: ${value}`
  );

  if (confirmed) yield put(reset());
}

export default function *counterSaga() {
  yield* takeEvery(REQUEST_RESET, confirmReset);
}
