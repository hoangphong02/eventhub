import { UserState, UserActionType } from './type';

const initialState: UserState = {
    user: {
        id: '',
        name: '',
        avatar: '',
        email: '',
        phone: ''
    },
    isLoading: false,
    error: '',
};
interface IAction {
    type: string;
    payload: any;
}
export const userReducer = (
    state: UserState = initialState,
    action: IAction,
): UserState => {
    switch (action.type) {

        case UserActionType.GET_PROFILE_REQUEST:
            return { ...state, isLoading: true };
        case UserActionType.GET_PROFILE_SUCCESS:
            return { ...state, isLoading: false, user: action.payload };
        case UserActionType.GET_PROFILE_FAILURE:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
};