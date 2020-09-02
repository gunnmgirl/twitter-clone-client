import { call, put, takeLatest } from "redux-saga/effects";

import mutations from "../../../api/mutations";

function* signup(action) {
  try {
    const data = yield call(mutations.signup, action.payload);
    const result = data.data;
    yield put({ type: "SIGNUP_SUCCESS", payload: result });
  } catch (error) {
    yield put({ type: "SIGNUP_FAILURE", error });
  }
}

function* login(action) {
  const { formik } = action.meta;
  try {
    const data = yield call(mutations.login, action.payload);
    const result = data.data;
    yield put({ type: "LOGIN_SUCCESS", payload: result });
  } catch (error) {
    formik.setFieldError("password", error.data);
    yield put({ type: "LOGIN_FAILURE", error });
  } finally {
    formik.setSubmitting(false);
  }
}

const saga = function* () {
  yield takeLatest("SIGNUP_REQUEST", signup);
  yield takeLatest("LOGIN_REQUEST", login);
};

export default saga;
