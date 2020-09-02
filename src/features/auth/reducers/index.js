const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  console.log("reducer action ", action);
  switch (action.type) {
    case "SIGNUP_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
