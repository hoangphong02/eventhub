import { getAllProducts, postProduct, deleteProduct, updateProduct } from './service';
import { Dispatch, ActionCreator, Action } from 'redux';
import { ProductModel, ProductActionType } from './type';

export interface IAction extends Action {
    readonly payload?: any
}


/* action creators */

export const getProducts = (): IAction => ({
    type: ProductActionType.GET_ALL_PRODUCT_REQUEST,
});

// export const getProducts: ActionCreator<any> = () => {
//     return async (dispatch: Dispatch) => {
//         dispatch({
//             type: ProductActionType.GET_ALL_PRODUCT_REQUEST,
//         });

//         try {
//             const { data } = await getAllProducts();
//             dispatch({ type: ProductActionType.GET_ALL_PRODUCT_SUCCESS, payload: data });
//         } catch (e) {
//             dispatch({ type: ProductActionType.GET_ALL_PRODUCT_FAILURE, payload: e });
//         }
//     };
// };

export const removeProduct = (id: string): IAction => ({
    type: ProductActionType.REMOVE_PRODUCT_REQUEST,
    payload: id,
});

// export const removeProduct: ActionCreator<any> = (id: string) => {
//     return async (dispatch: Dispatch) => {
//         dispatch({
//             type: ProductActionType.REMOVE_PRODUCT_REQUEST,
//         });

//         try {
//             await deleteProduct(id);
//             dispatch({ type: ProductActionType.REMOVE_PRODUCT_SUCCESS, payload: id });
//         } catch (e) {
//             dispatch({
//                 type: ProductActionType.REMOVE_PRODUCT_FAILURE,
//                 payload: e,
//             });
//         }
//     };
// };

export const updateProducts = (product: ProductModel) => ({
    type: ProductActionType.UPDATE_PRODUCT_REQUEST,
    payload: product,
});

// export const updateProducts: ActionCreator<any> = (product: ProductModel) => {
//     return async (dispatch: Dispatch) => {
//         dispatch({
//             type: ProductActionType.UPDATE_PRODUCT_REQUEST,
//         });

//         try {
//             await updateProduct(product);
//             dispatch({ type: ProductActionType.UPDATE_PRODUCT_SUCCESS, payload: product });
//         } catch (e) {
//             dispatch({
//                 type: ProductActionType.UPDATE_PRODUCT_FAILURE,
//                 payload: e,
//             });
//         }
//     };
// };

export const addProduct = (product: ProductModel): IAction => ({
    type: ProductActionType.ADD_PRODUCT_REQUEST,
    payload: product,
});

// export const addProduct: ActionCreator<any> = (product: ProductModel) => {
//     return async (dispatch: Dispatch) => {
//         dispatch({
//             type: ProductActionType.ADD_PRODUCT_REQUEST,
//         });

//         try {
//             const { data } = await postProduct(product);
//             dispatch({ type: ProductActionType.ADD_PRODUCT_SUCCESS, payload: data });
//         } catch (e) {
//             dispatch({
//                 type: ProductActionType.ADD_PRODUCT_FAILURE,
//                 payload: e,
//             });
//         }
//     };
// };