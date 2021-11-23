import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

// Redux Thunk has been replaced with Redux Sagas
// import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

// REDUX PERSIST
// Allows redux to persist the Store depending on certain config options set
import { persistStore } from "redux-persist";

// REDUX SAGAS
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();
// The Middleware that the Store is expecting from Redux is an array []

// Redux Thunk has been replaced with Redux Sagas
// const middlewares = [thunk];
const middlewares = [sagaMiddleware];

// only run logger (in browser console) in development mode, not production
if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// redux-saga
// sagaMiddleware.run();

//redux-persist
export const persistor = persistStore(store);

// eslint-disable-next-line
export default { store, persistor };

// the store object will be imported into index.js and passed into the PROVIDER
