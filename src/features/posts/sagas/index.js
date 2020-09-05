import { call, put, takeLatest } from "redux-saga/effects";

import mutations from "../../../api/mutations";
import queries from "../../../api/queries";

function* createPost(action) {
  const { formik } = action.meta;
  try {
    const data = yield call(mutations.createPost, action.payload);
    const result = data.data;
    formik.setSubmitting(false);
    yield put({ type: "CREATE_POST_SUCCESS", payload: result });
  } catch (error) {
    formik.setSubmitting(false);
    yield put({ type: "CREATE_POST_FAILURE", error });
  }
}

function* deletePost(action) {
  try {
    const data = yield call(mutations.deletePost, action.payload);
    const result = data.data;
    yield put({ type: "DELETE_POST_SUCCESS", payload: result });
  } catch (error) {
    yield put({ type: "DELETE_POST_FAILURE", error });
  }
}

function* editPost(action) {
  try {
    const data = yield call(mutations.editPost, action.payload);
    const result = data.data;
    yield put({ type: "EDIT_POST_SUCCESS", payload: result });
  } catch (error) {
    yield put({ type: "EDIT_POST_FAILURE", error });
  }
}

function* getPosts(action) {
  try {
    const data = yield call(queries.getPosts);
    const result = data.data;
    yield put({ type: "GET_POSTS_SUCCESS", payload: result });
  } catch (error) {
    yield put({ type: "GET_POSTS_FAILURE", error });
  }
}

const saga = function* () {
  yield takeLatest("CREATE_POST_REQUEST", createPost);
  yield takeLatest("GET_POSTS_REQUEST", getPosts);
  yield takeLatest("DELETE_POST_REQUEST", deletePost);
  yield takeLatest("EDIT_POST_REQUEST", editPost);
};

export default saga;
