export const state = () => ({
  paymentStatus: false,
  placeholder: 'RM 67.00'
})

export const getters = {
  getPaymentStatus (state) {
    return state.paymentStatus
  },
  getPlaceholder (state) {
    return state.placeholder
  }
}

export const mutations = {
  updatePaymentStatus (state, status) {
    state.paymentStatus = status
    state.placeholder = 'RM 67.00'
  },
  updatePaymentStatus2 (state, status) {
    state.paymentStatus = status
    state.placeholder = 'RM 66.70'
    console.log(state.placeholder)
  }
}

export const actions = {
  changePaymentStatus ({ commit }, status) {
    commit('updatePaymentStatus', status)
  },
  changePaymentStatus2 ({ commit }, status) {
    commit('updatePaymentStatus2', status)
  }
}
