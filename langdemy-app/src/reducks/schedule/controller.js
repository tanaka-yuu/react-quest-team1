import { db } from "../../firebase/index";
import firebase from "firebase/app"
import { takeEvery, fork, call, put } from 'redux-saga/effects';
import initialState from '../store/initialState'

function* callData(){

  console.log('---------------');

    // const user = yield firebase.auth().currentUser;
    // const state = initialState.schedule;

    // console.log('this.state.schedule');

    // if (user) {
    //   return axios({
    //     methiod: 'get',
    //     url: 'http://localhost:4000/',
    //   })
    //   .then((result) => {
    //     const uid = user.uid;
    //     console.log(uid);
  
    //     yield db.collection("lessonData")
    //       .where("uid", "==", user.uid)
    //       .get()
    //       .then(function(querySnapshot) {
    //         querySnapshot.forEach(function(doc) {
    //           const data = doc.data();
    //           if(nowDate < data.finishTime.toDate() && nowDate > data.startTime.toDate()){
    //             state.isStartTime = true;
    //             state.joinUrl = data.joinUrl;
    //           }
    //         }); 
    //     });
    //     return state;
    //   })
    // } 
    // return state;
}

function* getData() {
  const response = yield call(callData);
  yield put ({
      type: 'STORE_SCHEDULE_SUCCESS',
      payload: response,
  })
}

function* getUrl () {
  console.log('--------in yield');
  yield fork(getData);
}

export default function* ()  {
  yield takeEvery('STORE_SCHEDULE_REQUEST', getUrl);
}