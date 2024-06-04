import { all } from 'redux-saga/effects';
import { productSaga } from './product/saga'
import { voucherSaga } from './voucher/saga'
import { authSaga } from './auth/saga'
import { userSaga } from './user/saga'




export default function* rootSaga() {
    yield all([voucherSaga(), productSaga(), authSaga(), userSaga()]);
}
