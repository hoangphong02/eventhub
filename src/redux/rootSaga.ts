import { all } from 'redux-saga/effects';
import { productSaga } from './product/saga'
import { voucherSaga } from './voucher/saga'


export default function* rootSaga() {
    yield all([voucherSaga(), productSaga()]);
}
