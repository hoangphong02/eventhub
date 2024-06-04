import { combineReducers } from 'redux';
import { productReducer } from './product/reducer';
import { voucherReducer } from './voucher/reducer';
import { authReducer } from './auth/reducer';
import { userReducer } from './user/reducer';




const rootReducer = combineReducers({
    productReducer, voucherReducer, authReducer, userReducer
});

export default rootReducer;
