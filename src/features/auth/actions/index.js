export const signup = (payload) => {
  return {
    type: "SIGNUP_REQUEST",
    payload,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const login = (payload, meta) => {
  return {
    type: "LOGIN_REQUEST",
    payload,
    meta,
  };
};
