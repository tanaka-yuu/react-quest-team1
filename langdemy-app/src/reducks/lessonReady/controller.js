import { db } from "../../firebase/index";
import firebase from "firebase/app"
import { takeEvery, fork, call, put } from 'redux-saga/effects';
import initialState from '../store/initialState'

function* callData(){

  console.log('---------------');

    //ログインユーザの取得
    const user = yield firebase.auth().currentUser;
    //使用するオブジェクトの定義
    const state = initialState.lessonReady;
    //Zoom開始時間と現在時刻を比較するために現在の時刻取得
    const nowDate = new Date();

    if (user) {

      //ユーザID取得
      const uid = user.uid;
      console.log(uid);

      //DBからユーザIDが一致しているデータを探す。
      yield db.collection("lessonData")
        .where("uid", "==", user.uid)
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            const data = doc.data();
            const startTime = data.startTime.toDate();
            const finishTime = data.finishTime.toDate();
            console.log(data);
            
            //開始時間の10分前
            const beforeStartTime = startTime.setMinutes(startTime.getMinutes() -10);
            //終了時間の10分後
            const afterFinishTime = finishTime.setMinutes(finishTime.getMinutes() +10);

            console.log(beforeStartTime);

            //開始10分前、終了10分後以内であった場合
            if(nowDate <= afterFinishTime && nowDate >= beforeStartTime){
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