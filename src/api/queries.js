import axios from "../http";

function getPosts(payload) {
  return axios.get("/posts", payload);
}

export default {
  getPosts,
};
