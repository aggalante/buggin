const userKey = "_buggin_user";
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem(userKey)),
  // user: { name: "Test", email: "aaa@aaa.pt" },
  validToken: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOKEN_VALIDATED":
      if (action.payload) {
        return { ...state, validToken: true };
      } else {
        localStorage.removeItem(userKey);
        return { ...state, validToken: false, user: null };
      }
    case "USER_FETCHED":
      localStorage.setItem(userKey, JSON.stringify(action.payload));
      return { ...state, user: action.payload, validToken: true };
    default:
      return state;
  }
};
