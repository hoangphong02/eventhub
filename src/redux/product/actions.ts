import { Action } from 'redux';
import { ProductModel, ProductActionType } from './type';

export interface IAction extends Action {
    readonly payload?: any
}
/* action creators */

export const getProducts = (id: string): IAction => ({
    type: ProductActionType.GET_ALL_PRODUCT_REQUEST,
    payload: id
});

export const removeProduct = (id: string): IAction => ({
    type: ProductActionType.REMOVE_PRODUCT_REQUEST,
    payload: id,
});

export const updateProducts = (product: ProductModel) => ({
    type: ProductActionType.UPDATE_PRODUCT_REQUEST,
    payload: product,
});

export const addProduct = (product: ProductModel): IAction => ({
    type: ProductActionType.ADD_PRODUCT_REQUEST,
    payload: product,
});




