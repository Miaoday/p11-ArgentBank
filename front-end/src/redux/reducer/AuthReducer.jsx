
const initialState = {
  status: "auth",
  connection: false,
  token: null,
  error: null
}

export default function AuthReducer (state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESSFUL':
      return{
        ...state,
        status: "loginSuccessful",
        connection: true,
        token: action.payload,
        error: null
      }
    case 'LOGIN_FAILED':
      return{
        ...state,
        status: "loginFailed",
        connection: false,
        token: null,
        error: action.payload
      }
    case 'LOG_OUT':
      return initialState;
    default:
      return state;
  }
}