import { db } from "../../firebase/index";
import firebase from "firebase/app"
import { takeEvery, fork, call, put } from 'redux-saga/effects';

function* callData(){
    console.log('---------------');
    //ログインユーザの取得
    const user = yield firebase.auth().currentUser;
    //使用するオブジェクトの定義
    const List = [];
    const elements = {
        name:"",
        startTime: null,
        endTime: null,
    }
    if (user) {
      //ユーザID取得
      const uid = user.uid;
      console.log(uid);
  
      //DBからユーザIDが一致しているデータを取得
      yield db.collection("lessonData")
        .where("uid", "==", user.uid)
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
          const data = doc.data();
          console.log(data);
          const startTime = data.startTime.toDate();
          const endTime = data.finishTime.toDate();
          const name = data.lessonId;
          console.log(elements);
          List.push({
              'name': name,
              'startTime': startTime,
              'endTime': endTime,
          });
          console.log(List);
        }); 
      });
      return List;
    } 
    return List;
}

function* getData() {
    const response = yield call(callData);
    yield put ({
      type: 'ACCEPT_SCHEDULE_APPOINTMENT',
      payload: response,
    })
}

function* getAppointment () {
  console.log('--------in appointment yield');
  yield fork(getData);
}

export default function*  ()  {
  yield takeEvery('GET_SCHEDULE_APPOINTMENT', getAppointment);
}