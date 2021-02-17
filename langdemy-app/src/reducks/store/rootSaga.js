import { all } from 'redux-saga/effects';
import controller from '../../components/pages/LessonReady/controller';

export default function* routeSaga() {
   yield all([
      controller(),
   ]);
}
