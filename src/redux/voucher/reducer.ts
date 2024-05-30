import { VoucherState, VoucherActionType } from './type';

const initialState: VoucherState = {
    vouchers: [{
        id: '',
        name: '',
        image: '',
        is_point_voucher: false
    }],
    voucher: {
        id: '',
        name: '',
        image: '',
        is_point_voucher: false
    },
    isLoading: false,
    error: '',
};


interface IAction {
    type: string;
    payload: any;
}
export const voucherReducer = (
    state: VoucherState = initialState,
    action: IAction,
): VoucherState => {
    switch (action.type) {
        case VoucherActionType.GET_ALL_VOUCHER_REQUEST:
            return { ...state, isLoading: true };
        case VoucherActionType.GET_ALL_VOUCHER_SUCCESS:
            return { ...state, isLoading: false, vouchers: action.payload };
        case VoucherActionType.GET_ALL_VOUCHER_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
};