import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  loginFailure,
  loginSuccess,
  signupSuccess,
  signupFailure,
} from "./actions";
import { LOGIN_REQUEST, SIGNUP_REQUEST } from "./actionTypes";

import { IAuth } from "./types";
import { axiosClient } from "../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEY } from "../../constants/storageKey";
const login = async (payload: { email: string; password: string }) => {
  const { data } = await axiosClient.post<IAuth>(
    '/clients/web/login',
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
    const response: { token_type: string,
      access_token: string,
      refresh_token: string,
      expires_in: string, 
       } = yield call(login, {
      email: action.payload.values.email,
      password: action.payload.values.password,
    });
    const {
      token_type: tokenType,
      access_token: accessToken,
      refresh_token: refreshToken,
      expires_in: expiresIn,
    } = response;
    AsyncStorage.setItem(
      STORAGE_KEY.ACCESS_TOKEN,
      `${tokenType} ${accessToken}`,
    );
    AsyncStorage.setItem(STORAGE_KEY.REFRESH_TOKEN, refreshToken);
    AsyncStorage.setItem(STORAGE_KEY.EXPIRES_IN, expiresIn);
    yield put(
      loginSuccess({
        token: response.access_token,
      })
    );
    action.payload.callback(response.token_type);
  } catch (e: any) {
    yield put(
      loginFailure({
        error: e.message,
      })
    );
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield all([takeLatest(LOGIN_REQUEST, loginSaga)]);
}
