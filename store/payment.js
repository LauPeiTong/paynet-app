export const state = () => ({
  paymentStatus: false,
  placeholder: 'RM 67.00',
  points: 457
})

export const getters = {
  getPaymentStatus (state) {
    return state.paymentStatus
  },
  getPlaceholder (state) {
    return state.placeholder
  },
  getPoints (state) {
    return state.points
  }
}

export const mutations = {
  updatePaymentStatus (state, status) {
    if (status) {
      state.paymentStatus = status
      state.placeholder = 'RM 67.00'
      state.points = state.points + 68
    }
  },
  updatePaymentStatus2 (state, status) {
    if (status) {
      state.paymentStatus = status
      state.placeholder = 'RM 66.70'
      state.points = state.points + 68
    }
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
