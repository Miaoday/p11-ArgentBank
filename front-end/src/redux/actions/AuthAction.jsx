export const loginSuccessful = (token) => {
  return {
    type: 'LOGIN_SUCCESSFUL',
    payload: token,
  }
}

export const loginFailed = (error) => {
  return {
    type: 'LOGIN_FAILED',
    payload: error,
  }
}

export const logout = () => {
  return {
    type: 'LOG_OUT'
  }
} 