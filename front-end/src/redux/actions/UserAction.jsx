
export const getUserName = (userData)=> {
  return {
    type: 'GET_USER_NAME',
    payload: {
      userData,
      createdAt: new Date().toISOString()
    }
  }
}

export const editUserName = (userName)=> {
  return{
    type: 'EDIT_USER_NAME',
    payload: {
      userName,
      createdAt: new Date().toISOString()
    }
  }
}