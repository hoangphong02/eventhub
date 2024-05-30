import { put, takeEvery, call } from 'redux-saga/effects';
import { all } from '@redux-saga/core/effects';
import { getProfile, login } from './service';
import { AuthActionType } from './type';
import { IAction } from './actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEY } from '../../constants/storageKey';


function* loginRequest({ payload: LoginPayload }: IAction) {
    try {
        const { data } = yield call(login, LoginPayload);
        const {
            token_type,
            access_token,
            refresh_token,
            expires_in,
        } = data.data;
        console.log('data', data)
        AsyncStorage.setItem(
            STORAGE_KEY.ACCESS_TOKEN,
            `${token_type} ${access_token}`,
        );
        AsyncStorage.setItem(STORAGE_KEY.REFRESH_TOKEN, refresh_token);
        AsyncStorage.setItem(STORAGE_KEY.EXPIRES_IN, expires_in);
        AsyncStorage.setItem(STORAGE_KEY.IS_LOGIN, 'true');

        yield put({ type: AuthActionType.LOGIN_SUCCESS, payload: data });
    } catch (e) {
        yield put({ type: AuthActionType.LOGIN_FAILURE, payload: e });
    }
}

function* getProfileRequest() {
    try {
        const { data } = yield call(getProfile); // saga
        yield put({ type: AuthActionType.GET_PROFILE_SUCCESS, payload: data });
    } catch (e) {
        yield put({
            type: AuthActionType.GET_PROFILE_FAILURE,
            payload: e,
        });
    }
}



/* Saga watches the actions */

function* watchLogin() {
    yield takeEvery(AuthActionType.LOGIN_REQUEST, loginRequest);
}
function* watchProfile() {
    yield takeEvery(AuthActionType.GET_PROFILE_REQUEST, getProfileRequest);
}



/* Saga sends all the watchers to the sagaMiddleware to run. */
export function* authSaga() {
    yield all([
        watchLogin(), watchProfile()
    ]);
}