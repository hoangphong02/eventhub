import { put, takeEvery, call } from 'redux-saga/effects';
import { all } from '@redux-saga/core/effects';
import { getProfile, } from './service';
import { UserActionType, UserModel } from './type';
import { IAction } from './actions';


function* getProfileRequest() {
    try {
        const response: UserModel = yield call(getProfile);
        console.log('response', response)
        yield put({ type: UserActionType.GET_PROFILE_SUCCESS, payload: response });
    } catch (e) {
        yield put({
            type: UserActionType.GET_PROFILE_FAILURE,
            payload: e,
        });
    }
}


function* watchProfile() {
    yield takeEvery(UserActionType.GET_PROFILE_REQUEST, getProfileRequest);
}


/* Saga sends all the watchers to the sagaMiddleware to run. */
export function* userSaga() {
    yield all([
        watchProfile()
    ]);
}