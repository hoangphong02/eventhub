import { Action } from 'redux';
import { VoucherActionType } from './type';

export interface IAction extends Action {
    readonly payload?: any
}


/* action creators */

export const getVouchers = (id: string): IAction => ({
    type: VoucherActionType.GET_ALL_VOUCHER_REQUEST,
    payload: id
});


