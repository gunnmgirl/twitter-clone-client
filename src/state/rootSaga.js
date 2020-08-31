import { all, fork } from "redux-saga/effects";

//import userSagas from "../features/user/sagas";
import authSagas from "../features/auth/sagas";
//import postSagas from "../features/posts/sagas";

export default function* rootSaga() {
  yield all([fork(authSagas)]); //, fork(userSagas), fork(postSagas)]);
}
