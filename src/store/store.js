import { compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";

import { rootReducer } from "./root-reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const sagaMiddleWare = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [logger,thunk,sagaMiddleWare];

const composeEnhancer = (process.env.NODE_ENV !== 'production' 
&& window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)  || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));


export const store = createStore(
    persistedReducer,
    undefined,
    composedEnhancers
)

sagaMiddleWare.run(rootSaga);

export const persistor = persistStore(store);