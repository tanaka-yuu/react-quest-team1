import { all } from 'redux-saga/effects';
import expressController from '../lessonReady/expressController';

export default function* routeSaga() {
   yield all([
      expressController(),
   ]);
}
