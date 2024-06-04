export interface UserState {
    readonly user: UserModel;
    readonly isLoading: boolean;
    readonly error: string;
}

export type ApiResponse = Record<string, any>;

export interface UserModel extends ApiResponse {
    id: string;
    name: string;
    avatar: string;
    email: string;
    phone: string
}

/* action types */
export const UserActionType = {
    GET_PROFILE_REQUEST: '@@/user/GET_PROFILE_REQUEST',
    GET_PROFILE_SUCCESS: '@@/user/GET_PROFILE_SUCCESS',
    GET_PROFILE_FAILURE: '@@/user/GET_PROFILE_FAILURE',
};