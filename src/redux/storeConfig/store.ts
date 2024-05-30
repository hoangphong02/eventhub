import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
  Store,
} from 'redux';
import { productReducer } from '../product/reducer';
import { voucherReducer } from '../voucher/reducer';
import createSagaMiddleware from 'redux-saga';
import { ProductState } from '../product/type';
import { VoucherState } from '../voucher/type';
import { AuthState } from '../auth/type';

import rootSaga from '../rootSaga';
import rootReducer from '../rootReducer';

export interface IApplicationState {
  [x: string]: any;
  productReducer: ProductState;
  voucherReducer: VoucherState;
  AuthState: AuthState
}

// const rootReducer = combineReducers<IApplicationState>({
//   productReducer: productReducer,
//   voucherReducer: voucherReducer,
// });

// @ts-ignore
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]; // side-effect middleware
const store: Store<IApplicationState, any> = createStore(
  rootReducer,
  withDevTools(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);

export default store;