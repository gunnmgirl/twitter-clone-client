import axios from "../http";

function signup(payload) {
  return axios.put("/auth/signup", payload);
}

export default {
  signup,
};

export { signup };
