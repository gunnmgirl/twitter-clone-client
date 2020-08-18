import { combineReducers } from "redux";

import posts from "../features/posts/reducers";
import user from "../features/user/reducers";

const rootReducer = combineReducers({
  posts,
  user,
});

export default rootReducer;
