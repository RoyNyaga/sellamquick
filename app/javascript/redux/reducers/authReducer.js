import CREATE_USER_SUCCESS from "../actions/authActions"

const initailState = {
  user: '',
  message: '',
  signInStatus: 'NOT_LOGGED_IN',
};

const AuthReducer = (state = initailState, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return {
        user: action.user,
        message: 'User has been created',
        signInStatus: 'LOGGED_IN',
      };
    default:
      return state;
  }
};

export default AuthReducer;
