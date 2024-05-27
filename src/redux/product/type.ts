export interface ProductState {
    readonly products: ProductModel[];
    readonly product: ProductModel;
    readonly isLoading: boolean;
    readonly error: string;
}

export type ApiResponse = Record<string, any>;

export interface ProductModel extends ApiResponse {
    id: string;
    name: string;
    image: string;
    price: string
}

/* action types */
export const ProductActionType = {
    GET_ALL_PRODUCT_REQUEST: '@@/product/GET_ALL_PRODUCT_REQUEST',
    GET_ALL_PRODUCT_SUCCESS: '@@/product/GET_ALL_PRODUCT_SUCCESS',
    GET_ALL_PRODUCT_FAILURE: '@@/product/GET_ALL_PRODUCT_FAILURE',

    REMOVE_PRODUCT_REQUEST: '@@/product/REMOVE_PRODUCT_REQUEST',
    REMOVE_PRODUCT_SUCCESS: '@@/product/REMOVE_PRODUCT_SUCCESS',
    REMOVE_PRODUCT_FAILURE: '@@/product/REMOVE_PRODUCT_FAILURE',

    ADD_PRODUCT_REQUEST: '@@/product/ADD_PRODUCT_REQUEST',
    ADD_PRODUCT_SUCCESS: '@@/product/ADD_PRODUCT_SUCCESS',
    ADD_PRODUCT_FAILURE: '@@/product/ADD_PRODUCT_FAILURE',

    UPDATE_PRODUCT_REQUEST: '@@/product/UPDATE_PRODUCT_REQUEST',
    UPDATE_PRODUCT_SUCCESS: '@@/product/UPDATE_PRODUCT_SUCCESS',
    UPDATE_PRODUCT_FAILURE: '@@/product/UPDATE_PRODUCT_FAILURE',
};