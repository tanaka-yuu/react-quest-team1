import axios from 'axios';
import { takeEvery, fork, call, put } from 'redux-saga/effects';

function callAPI(){
    return axios({
        methiod: 'get',
        url: 'http://localhost:4000/createMeeting/2021-03-30T12:00:00Z/60',
    })
    .then((result) => {
        return result.data;
    })
}

function* getData() {
    const response = yield call(callAPI);
    yield put ({
        type: 'GET_EXPRESS_SUCCESS',
        payload: response,
    })
}

function* getExpress () {
    console.log('--------in yield');
    yield fork(getData);
}

export default function* ()  {
    yield takeEvery('GET_EXPRESS_REQUEST', getExpress);
}