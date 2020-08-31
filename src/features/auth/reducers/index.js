const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  console.log("akcija u reduceru ", action);
  switch (action.type) {
    case "SIGNUP_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    default:
      return state;
  }
};
