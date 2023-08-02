const initialState = {
  userAuthenticated: false,
  // other authentication-related state
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTHENTICATED':
      return { ...state, userAuthenticated: action.payload };
    // handle other action types if needed
    default:
      return state;
  }
};

export default authReducer;
