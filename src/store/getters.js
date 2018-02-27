const getters = {
  accessToken: state => state.user.accessToken,
  loginName: state => state.user.loginName,
  isIndex: state => state.appParameter.isIndex,
}
export default getters
