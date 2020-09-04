import axios from "../http";

function signup(payload) {
  return axios.put("/auth/signup", payload);
}

function login(payload) {
  return axios.post("/auth/login", payload);
}

function deletePost(payload) {
  return axios.post("/posts/delete", payload);
}

function createPost(payload) {
  return axios.put("/posts/create", payload);
}

export default {
  signup,
  login,
  createPost,
  deletePost,
};

export { signup, login };
