import { ProductState, ProductActionType } from './type';

const initialState: ProductState = {
    products: [{
        id: '',
        name: '',
        image: '',
        price: ''
    }],
    product: {
        id: '',
        name: '',
        image: '',
        price: ''
    },
    isLoading: false,
    error: '',
};
interface IAction {
    type: string;
    payload: any;
}
export const productReducer = (
    state: ProductState = initialState,
    action: IAction,
): ProductState => {
    switch (action.type) {
        case ProductActionType.GET_ALL_PRODUCT_REQUEST:
            return { ...state, isLoading: true };
        case ProductActionType.GET_ALL_PRODUCT_SUCCESS:
            return { ...state, isLoading: false, products: action.payload };
        case ProductActionType.GET_ALL_PRODUCT_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        case ProductActionType.REMOVE_PRODUCT_REQUEST:
            return { ...state, isLoading: true };
        case ProductActionType.REMOVE_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: state.products.filter(f => f.id !== action.payload),
            };
        case ProductActionType.REMOVE_PRODUCT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case ProductActionType.ADD_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case ProductActionType.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: [...state.products, action.payload],
            };
        case ProductActionType.ADD_PRODUCT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case ProductActionType.UPDATE_PRODUCT_REQUEST:
            return { ...state, isLoading: true };
        case ProductActionType.UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: state.products.map(product =>
                    product.id === action.payload.id ? action.payload : product,
                ),
            };
        case ProductActionType.UPDATE_PRODUCT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};