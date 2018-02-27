const appParameter = {
  state: {
    isIndex:true
  },
  mutations:{
    SET_ISINDEX:(state, isIndex) => {
      state.isIndex = isIndex
    },
  },
  actions: {
    setIsIndex({ commit }, isIndex){
      commit('SET_ISINDEX', isIndex)
    }
  }
}

export default appParameter
