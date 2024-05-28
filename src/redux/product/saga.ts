import { put, takeEvery, call } from 'redux-saga/effects';
import { all } from '@redux-saga/core/effects';
import { getAllProducts, postProduct, deleteProduct, updateProduct } from './service';
import { ProductActionType } from './type';
import { IAction } from './actions';

/*function generator implementations of Saga */
function* getAllProduct({ payload: id }: IAction) {
    try {
        const { data } = yield call(getAllProducts, id); // saga
        yield put({ type: ProductActionType.GET_ALL_PRODUCT_SUCCESS, payload: data });
    } catch (e) {
        yield put({
            type: ProductActionType.GET_ALL_PRODUCT_FAILURE,
            payload: e,
        });
    }
}

function* removingProduct({ payload: id }: IAction) {
    try {
        yield call(deleteProduct, id);
        yield put({ type: ProductActionType.REMOVE_PRODUCT_SUCCESS, payload: id });
    } catch (e) {
        yield put({
            type: ProductActionType.REMOVE_PRODUCT_FAILURE,
            payload: e,
        });
    }
}

function* addingProduct({ payload: newProduct }: IAction) {
    try {
        const { data } = yield call(postProduct, newProduct);
        yield put({ type: ProductActionType.ADD_PRODUCT_SUCCESS, payload: data });
    } catch (e) {
        yield put({ type: ProductActionType.ADD_PRODUCT_FAILURE, payload: e });
    }
}

function* updatingProduct({ payload: updatedProduct }: IAction) {
    try {
        yield call(updateProduct, updatedProduct);
        yield put({
            type: ProductActionType.UPDATE_PRODUCT_SUCCESS,
            payload: updatedProduct,
        });
    } catch (e) {
        yield put({
            type: ProductActionType.UPDATE_PRODUCT_FAILURE,
            payload: e,
        });
    }
}

/* Saga watches the actions */
function* watchGetAllProducts() {
    yield takeEvery(ProductActionType.GET_ALL_PRODUCT_REQUEST, getAllProduct);
}

function* watchRemovingProduct() {
    yield takeEvery(ProductActionType.REMOVE_PRODUCT_REQUEST, removingProduct);
}

function* watchAddingProduct() {
    yield takeEvery(ProductActionType.ADD_PRODUCT_REQUEST, addingProduct);
}
function* watchUpdatingProduct() {
    yield takeEvery(ProductActionType.UPDATE_PRODUCT_REQUEST, updatingProduct);
}

/* Saga sends all the watchers to the sagaMiddleware to run. */
export function* productSaga() {
    yield all([
        watchGetAllProducts(),
        watchRemovingProduct(),
        watchAddingProduct(),
        watchUpdatingProduct(),
    ]);
}