export interface AuthState {
    readonly auth: AuthModel;
    readonly isLoading: boolean;
    readonly error: string;
}

export type ApiResponse = Record<string, any>;

export interface AuthModel extends ApiResponse {
    access_token: string;
    expires_in: Number;
    refresh_token: string;
    token_type: string;
}

export interface LoginPayload {
    phone: string,
    password: string
}
export interface IAuth {
    accessToken: string;
    refreshToken: string;
}

/* action types */
export const AuthActionType = {
    LOGIN_REQUEST: '@@/auth/LOGIN_REQUEST',
    LOGIN_SUCCESS: '@@/auth/LOGIN_SUCCESS',
    LOGIN_FAILURE: '@@/auth/LOGIN_FAILURE',

    GET_PROFILE_REQUEST: '@@/auth/GET_PROFILE_REQUEST',
    GET_PROFILE_SUCCESS: '@@/auth/GET_PROFILE_SUCCESS',
    GET_PROFILE_FAILURE: '@@/auth/GET_PROFILE_FAILURE',
};