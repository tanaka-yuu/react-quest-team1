import { db } from "../../firebase/index";
import firebase from "firebase/app"
import axios from 'axios';
import { takeEvery, fork, call, put } from 'redux-saga/effects';

function* callData(appointment){

  console.log('---------------');

    const user = yield firebase.auth().currentUser;

    return axios({
      methiod: 'get',
      url: `http://localhost:4000/createMeeting/${appointment.startTime}:00Z/${appointment.classTime}`,
    })
    .then((result) => {
      const joinUrl = result;
      const lessonId = Math.random().toString(32).substring(2);

      const startTime = new Date(appointment.startTime)
      const finishTime = new Date(appointment.startTime)
      finishTime.setMinutes(finishTime.getMinutes() + appointment.classTime);

    const lessonData = {
      lessonId: lessonId,
      startTime: firebase.firestore.Timestamp.fromDate(startTime),
      finishTime: firebase.firestore.Timestamp.fromDate(finishTime),
      uid: user.uid,
      teacherId: '1',
      joinUrl: joinUrl.data,
    }

    console.log(lessonData);
    if (user) {
      db.collection("lessonData")
        .doc(lessonId)
        .set(lessonData)
        .then(() => {
          return appointment
        });
    } 
    return state;
    })
}

function* getData(appointment) {
  const response = yield call(callData, appointment);
  yield put ({
      type: 'STORE_SCHEDULE_SUCCESS',
      payload: response,
  })
}

function* getUrl (action) {
  console.log('--------in yield');
  yield fork(getData, action.payload);
}

export default function*  ()  {
  yield takeEvery('STORE_SCHEDULE_REQUEST', getUrl);
}