import { Action } from 'redux';
import { AuthModel, AuthActionType, LoginPayload } from './type';

export interface IAction extends Action {
    readonly payload?: any
}

export const login = (payload: LoginPayload): IAction => ({
    type: AuthActionType.LOGIN_REQUEST,
    payload: payload
});

export const getProfile = (): IAction => ({
    type: AuthActionType.GET_PROFILE_REQUEST,
});