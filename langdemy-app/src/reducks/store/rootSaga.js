import { all } from 'redux-saga/effects';
import lessonReadyController from '../lessonReady/controller';
import scheduleController from '../schedule/controller';

export default function* routeSaga() {
   yield all([
      lessonReadyController(),
      scheduleController(),
   ]);
}
