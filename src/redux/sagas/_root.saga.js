import { /*all,*/ takeEvery } from 'redux-saga/effects';
import postTimer from './postTimer.saga';
import putTimer from './putTimer.saga';
import getTimer from './getTimer.saga';



// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield takeEvery('POST_TIMER', postTimer);
  yield takeEvery('PUT_TIMER', putTimer);
  yield takeEvery('GET_TIMER', getTimer);
//   yield all([
//   ]);
}
