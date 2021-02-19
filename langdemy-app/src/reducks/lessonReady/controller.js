import { db } from "../../firebase/index";
import firebase from "firebase/app"
import { takeEvery, fork, call, put } from 'redux-saga/effects';
import initialState from '../store/initialState'

function* callData(){

  console.log('---------------');

    const user = yield firebase.auth().currentUser;
    const state = initialState.lessonReady;
    const nowDate = new Date();

    if (user) {

      const uid = user.uid;
      console.log(uid);

      yield db.collection("lessonData")
        .where("uid", "==", user.uid)
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            const data = doc.data();
            console.log(data);
            console.log(data.startTime.toDate());
            console.log(nowDate);
            console.log(data.finishTime.toDate());
            if(nowDate < data.finishTime.toDate() && nowDate > data.startTime.toDate()){
              state.isStartTime = true;
              state.joinUrl = data.joinUrl;
            }
          }); 
      });
      return state;
    } 
    return state;
}

function* getData() {
  const response = yield call(callData);
  yield put ({
      type: 'GET_ZOOM_SUCCESS',
      payload: response,
  })
}

function* getDB () {
  console.log('--------in yield');
  yield fork(getData);
}

export default function* ()  {
  yield takeEvery('GET_ZOOM_REQUEST', getDB);
}