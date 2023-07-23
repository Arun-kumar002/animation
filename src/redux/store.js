import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import createSagaMiddleware from "@redux-saga/core";
import { sagaWatcher } from "./saga/sagawatcher";

const sagaMiddleWare = createSagaMiddleware();




export const Store = configureStore({
  reducer: authSlice,
  middleware: [sagaMiddleWare],
});





sagaMiddleWare.run(sagaWatcher);
