const initialAuthState = { isLoggedIn: false };

module.exports = function auth(state = initialAuthState, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true };
    case 'LOGIN_SUCCESS':
      console.log("auth reducer", action);
      return {...state, isLoggedIn: true};
    case 'LOGIN_ERROR':
      return {...state, isLoggedIn: false};
    case 'LOGOUT':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}