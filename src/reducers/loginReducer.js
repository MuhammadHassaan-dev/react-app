export const loginReducer = (state = { isLoggedIn: false }, action) => {
  switch (action) {
    case "LOGIN":
      return (state.isLoggedIn = true);

    case "LOGOUT":
      return (state.isLoggedIn = false);

    default:
      return state;
  }
};
