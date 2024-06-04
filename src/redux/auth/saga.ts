import { put, takeEvery, call } from 'redux-saga/effects';
import { all } from '@redux-saga/core/effects';
import { login } from './service';
import { AuthActionType } from './type';
import { IAction } from './actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEY } from '../../constants/storageKey';
import { SagaIterator } from 'redux-saga';


function* loginRequest({ payload }: IAction): SagaIterator {
    try {
        const response = yield call(login, payload);
        // Ensure response data structure
        if (response) {
            const {
                token_type,
                access_token,
                refresh_token,
                expires_in,
            } = response;
            AsyncStorage.setItem(
                STORAGE_KEY.ACCESS_TOKEN,
                `${token_type} ${access_token}`,
            );
            AsyncStorage.setItem(STORAGE_KEY.REFRESH_TOKEN, refresh_token);
            AsyncStorage.setItem(STORAGE_KEY.EXPIRES_IN, expires_in);
            AsyncStorage.setItem(STORAGE_KEY.IS_LOGIN, 'true');

            yield put({ type: AuthActionType.LOGIN_SUCCESS, payload: response });
        } else {
            throw new Error('Unexpected response structure');
        }
    } catch (e) {
        console.log('Error during login:', e);
        yield put({ type: AuthActionType.LOGIN_FAILURE, payload: e });
    }
}

/* Saga watches the actions */

function* watchLogin() {
    yield takeEvery(AuthActionType.LOGIN_REQUEST, loginRequest);
}


/* Saga sends all the watchers to the sagaMiddleware to run. */
export function* authSaga() {
    yield all([
        watchLogin()
    ]);
}