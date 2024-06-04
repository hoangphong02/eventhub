import { Action } from 'redux';
import { UserModel, UserActionType } from './type';

export interface IAction extends Action {
    readonly payload?: any
}

export const getProfile = (): IAction => ({
    type: UserActionType.GET_PROFILE_REQUEST,
});