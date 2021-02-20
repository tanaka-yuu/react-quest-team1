import { all } from 'redux-saga/effects';
import lessonReadyController from '../lessonReady/controller';
import scheduleController from '../schedule/controller';
import getScheduleController from '../schedule/getScheduleController';

export default function* routeSaga() {
   yield all([
      lessonReadyController(),
      scheduleController(),
      getScheduleController(),
   ]);
}
