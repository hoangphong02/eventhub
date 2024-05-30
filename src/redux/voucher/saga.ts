import { put, takeEvery, call } from 'redux-saga/effects';
import { all } from '@redux-saga/core/effects';
import { getAllVouchers } from './service';
import { VoucherActionType } from './type';
import { IAction } from './actions';

/*function generator implementations of Saga */
function* getAllVoucher({ payload: id }: IAction) {
    try {
        const { data } = yield call(getAllVouchers, id); // saga
        yield put({ type: VoucherActionType.GET_ALL_VOUCHER_SUCCESS, payload: data });
    } catch (e) {
        yield put({
            type: VoucherActionType.GET_ALL_VOUCHER_FAILURE,
            payload: e,
        });
    }
}




/* Saga watches the actions */
function* watchGetAllVoucher() {
    yield takeEvery(VoucherActionType.GET_ALL_VOUCHER_REQUEST, getAllVoucher);
}


/* Saga sends all the watchers to the sagaMiddleware to run. */
export function* voucherSaga() {
    yield all([
        watchGetAllVoucher(),

    ]);
}