// Default state
const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.info('login error');
      return {
        ...state,
        authError: 'Login failed'
      };
    case 'LOGIN_SUCCESS':
      console.info('login success');
      return {
        ...state,
        authError: null
      };
    case 'LOGOUT_SUCCESS':
      console.info('logout success');
      return state;
    default:
      return state;
  }
};

export default authReducer;
