import { combineReducers } from "redux";

import posts from "../features/posts/reducers";
import user from "../features/user/reducers";
import auth from "../features/auth/reducers";

const rootReducer = combineReducers({
  posts,
  user,
  auth,
});

export default rootReducer;
