import { AuthState, AuthActionType } from './type';

const initialState: AuthState = {
    auth: {
        id: '',
        name: '',
        avatar: '',
        email: '',
        username: ''
    },
    isLoading: false,
    error: '',
};
interface IAction {
    type: string;
    payload: any;
}
export const authReducer = (
    state: AuthState = initialState,
    action: IAction,
): AuthState => {
    switch (action.type) {
        case AuthActionType.LOGIN_REQUEST:
            return { ...state, isLoading: true };
        case AuthActionType.LOGIN_SUCCESS:
            return { ...state, isLoading: false, auth: action.payload };
        case AuthActionType.LOGIN_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        case AuthActionType.GET_PROFILE_REQUEST:
            return { ...state, isLoading: true };
        case AuthActionType.GET_PROFILE_SUCCESS:
            return { ...state, isLoading: false, auth: action.payload };
        case AuthActionType.GET_PROFILE_FAILURE:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
};