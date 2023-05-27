export const state = () => ({
  paymentStatus: false
})

export const getters = {
  getPaymentStatus (state) {
    return state.paymentStatus
  }
}

export const mutations = {
  updatePaymentStatus (state, status) {
    state.paymentStatus = status
  }
}

export const actions = {
  changePaymentStatus ({ commit }, status) {
    commit('updatePaymentStatus', status)
  }
}
