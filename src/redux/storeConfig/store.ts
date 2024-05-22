import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../rootReducer';
import rootSaga from '../rootSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// ** init middleware
const middleware = [sagaMiddleware];

// ** Dev Tools

// ** Create store
const store = createStore(
  rootReducer,
  {},
  applyMiddleware(...middleware),
);

sagaMiddleware.run(rootSaga);

export { store };

