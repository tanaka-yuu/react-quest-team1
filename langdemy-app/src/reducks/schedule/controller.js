import { db } from "../../firebase/index";
import firebase from "firebase/app"
import axios from 'axios';
import { takeEvery, fork, call, put } from 'redux-saga/effects';

function* callData(appointment){
  console.log('---------------');
  //ログインユーザ取得
  const user = yield firebase.auth().currentUser;
  //Expressにアクセス
  return axios({
    methiod: 'get',
    url: `http://localhost:4000/createMeeting/${appointment.startTime}:00Z/${appointment.classTime}`,
  })
  .then((result) => {
    //ExpressからZoomのURLが返ってくる
    const joinUrl = result;
    //ランダムなレッスンIDを作成
    const lessonId = Math.random().toString(32).substring(2);

    const startTime = new Date(appointment.startTime)
    const finishTime = new Date(appointment.startTime)
    //終了時間設定
    finishTime.setMinutes(finishTime.getMinutes() + appointment.classTime);

    //DBに保存するデータ作成
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
  })
}

function* getData(appointment) {
  yield call(callData, appointment);
}

function* getUrl (action) {
  console.log('--------in yield');
  yield fork(getData, action.payload);
}

export default function*  ()  {
  yield takeEvery('STORE_SCHEDULE_REQUEST', getUrl);
}