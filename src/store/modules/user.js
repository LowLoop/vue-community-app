const user = {
  state: {
    accessToken:window.localStorage.getItem('token'),
    loginName:window.localStorage.getItem('loginName')
  },
  mutations:{
    SET_TOKEN:(state, token) => {
      state.token = token
    },
    SET_LOGINNAME:(state, loginName) => {
      state.loginName = loginName
    }
  },
  actions: {

  }
}

export default user
