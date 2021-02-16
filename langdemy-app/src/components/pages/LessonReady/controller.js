import axios from 'axios';
import { takeEvery, fork, call, put } from 'redux-saga/effects';
import { getExpress } from './action';

function callAPI(){
    return axios({
        methiod: 'get',
        url: 'http://localhost:4000/',
    })
    .then((result) => {
        return result.data;
    })
}

function* getData() {
    const response = yield call(callAPI);
    yield put ({
        type: 'GET_EXPRESS_REQUEST',
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


