import { Action } from 'redux';
import { VoucherActionType } from './type';

export interface IAction extends Action {
    readonly payload?: any
}


/* action creators */

export const getProducts = (): IAction => ({
    type: VoucherActionType.GET_ALL_VOUCHER_REQUEST,
});


