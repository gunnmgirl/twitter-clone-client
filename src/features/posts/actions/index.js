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

export const deletePost = (payload) => {
  return {
    type: "DELETE_POST_REQUEST",
    payload,
  };
};
