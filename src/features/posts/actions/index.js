export const createPost = (payload, meta) => {
  return {
    type: "CREATE_POST_REQUEST",
    payload,
    meta,
  };
};

export const getPosts = (payload) => {
  return {
    type: "GET_POSTS_REQUEST",
    payload,
  };
};
