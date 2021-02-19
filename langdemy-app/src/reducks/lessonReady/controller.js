import { db } from "../../firebase/index";
import firebase from "firebase/app"
import { takeEvery, fork, call, put } from 'redux-saga/effects';
import initialState from '../store/initialState'

function callData(){

  console.log('---------------');

    const user = firebase.auth().currentUser;

    const state = initialState.lessonReady;

    if (user) {

      const uid = user.uid;
      console.log(uid);

      db.collection("lessonData")
        .where("uid", "==", user.uid)
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            const data = doc.data();
            console.log(data);
            state.isStartTime = data.startTime;
            state.joinUrl = data.joinUrl;
          }); 
      });
      console.log(state)
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