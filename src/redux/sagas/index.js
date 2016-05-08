import { fork } from 'redux-saga/effects';
import counter from './counter';

export default function *rootSaga() {
  yield fork(counter);
}
