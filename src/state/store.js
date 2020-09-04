import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import { saveState, loadState } from "./localStorage";

const initialState = {
  auth: { isLoggedIn: false },
};

const persistedState = loadState(initialState);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(sagaMiddleware)
);

store.subscribe(() => {
  saveState({
    auth: store.getState().auth,
  });
});

sagaMiddleware.run(rootSaga);

export default store;
