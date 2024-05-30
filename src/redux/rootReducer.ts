import { combineReducers } from 'redux';
import { productReducer } from './product/reducer';
import { voucherReducer } from './voucher/reducer';
import { authReducer } from './auth/reducer';



const rootReducer = combineReducers({
    productReducer, voucherReducer, authReducer
});

export default rootReducer;
