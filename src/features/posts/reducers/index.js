const INITIAL_STATE = {
  posts: [],
  post: {
    content: "",
    upvotes: 0,
    downvotes: 0,
    creator: "",
  },
  loading: false,
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  console.log("reducer ", action);
  switch (action.type) {
    case "DELETE_POST_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "DELETE_POST_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
      };
    case "DELETE_POST_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "GET_POSTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "GET_POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        posts: action.payload,
      };
    case "GET_POSTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "CREATE_POST_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "CREATE_POST_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        posts: [...state.posts, action.payload],
      };
    case "CREATE_POST_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
