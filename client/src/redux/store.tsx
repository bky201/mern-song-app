import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from '@reduxjs/toolkit'
import { reducer } from "./index";
import rootSaga from "../saga/root-saga";


const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
      immutableCheck: false,
      serializableCheck: false
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

