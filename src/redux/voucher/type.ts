export interface VoucherState {
    readonly vouchers: VoucherModel[];
    readonly voucher: VoucherModel;
    readonly isLoading: boolean;
    readonly error: string;
}

export type ApiResponse = Record<string, any>;

export interface VoucherModel extends ApiResponse {
    id: string;
    name: string;
    image: string;
    discount: string
}

/* action types */
export const VoucherActionType = {
    GET_ALL_VOUCHER_REQUEST: '@@/voucher/GET_ALL_VOUCHER_REQUEST',
    GET_ALL_VOUCHER_SUCCESS: '@@/voucher/GET_ALL_VOUCHER_SUCCESS',
    GET_ALL_VOUCHER_FAILURE: '@@/voucher/GET_ALL_VOUCHER_FAILURE',
};