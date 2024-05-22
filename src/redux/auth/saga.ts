import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  loginFailure,
  loginSuccess,
  signupSuccess,
  signupFailure,
} from "./actions";
import { LOGIN_REQUEST, SIGNUP_REQUEST } from "./actionType";

import { IAuth } from "./types";
const login = async (payload: { email: string; password: string }) => {
  const { data } = await axios.post<IAuth>(
    "https://reqres.in/api/login",
    { email: payload.email, password: payload.password },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  return data;
};
function* loginSaga(action: any) {
  try {
    const response: { token: string } = yield call(login, {
      email: action.payload.values.email,
      password: action.payload.values.password,
    });

    yield put(
      loginSuccess({
        token: response.token,
      })
    );
    action.payload.callback(response.token);
  } catch (e: any) {
    yield put(
      loginFailure({
        error: e.message,
      })
    );
  }
}

// function* loginRequest( payload: Props ) {
//   try {
//     const response = yield call(() =>
//       axiosMicro.post('/clients/web/login', payload),
//     );
//     const {
//       token_type: tokenType,
//       access_token: accessToken,
//       refresh_token: refreshToken,
//       expires_in: expiresIn,
//     } = response.data;
//     AsyncStorage.setItem(
//       STORAGE_KEY.ACCESS_TOKEN,
//       `${tokenType} ${accessToken}`,
//     );
//     AsyncStorage.setItem(STORAGE_KEY.REFRESH_TOKEN, refreshToken);
//     AsyncStorage.setItem(STORAGE_KEY.EXPIRES_IN, expiresIn);
//     AsyncStorage.setItem(STORAGE_KEY.IS_LOGIN, true);
//     yield put(Actions.loginSuccess(response.data));
//   } catch (e) {
//     if (e?.response?.data) {
//       const messages = e.response.data;
//       yield put(Actions.loginFailure(messages));
//     }
//   }
// }





// eslint-disable-next-line func-names
export default function* () {
  yield all([takeLatest(LOGIN_REQUEST, loginSaga)]);
}
