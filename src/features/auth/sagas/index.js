import { call, put, takeLatest } from "redux-saga/effects";

import mutations from "../../../api/mutations";

function* signup(action) {
  console.log("akcija u sagi ", action);
  try {
    const data = yield call(mutations.signup, action.payload);
    console.log("data u sagi", data);
    const result = data.data;
    yield put({ type: "SIGNUP_SUCCESS", payload: result });
  } catch (error) {
    console.log("error: ", error);
    yield put({ type: "SIGNUP_FAILURE", error });
  }
}

const saga = function* () {
  yield takeLatest("SIGNUP_REQUEST", signup);
};

export default saga;
