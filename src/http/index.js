import axios from "axios";
import { useHistory } from "react-router-dom";

const history = useHistory();

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

instance.interceptors.request.use(
  (request) => {
    request.headers.authorization = localStorage.getItem("token");
    return request;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      history.push("/signIn");
    }
    return Promise.reject(error.response);
  }
);

export default instance;
