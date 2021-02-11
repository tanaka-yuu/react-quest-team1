import { all } from 'redux-saga/effects';
import reducer from '../components/pages/LessonReady/controllers';

export default function* routeSaga() {
   yield all([
      reducer(),
   ]);
}
