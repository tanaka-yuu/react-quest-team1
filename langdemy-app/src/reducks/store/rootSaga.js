import { all } from 'redux-saga/effects';
import controller from '../lessonReady/controller';

export default function* routeSaga() {
   yield all([
      controller(),
   ]);
}
