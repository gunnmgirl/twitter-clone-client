import axios from "../http";

function signUp(payload) {
  return axios.put("/auth/signup", payload);
}

export default {
  signUp,
};

export { signUp };
