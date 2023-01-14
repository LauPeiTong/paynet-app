export const state = () => ({
  selectedCourse: null,
  courses: [
    { id: 1, name: 'Financial Planning', company: 1, premium: false, taken: true, completed: false, total_level: 5, completed_level: 1 },
    { id: 2, name: 'Investment', company: 2, premium: true, taken: true, completed: false, total_level: 5, completed_level: 2 },
    { id: 3, name: 'Budgeting', company: 1, premium: false, taken: false, completed: false, total_level: 7 },
    { id: 4, name: 'Tax Planning', company: 2, premium: false, taken: true, completed: true, total_level: 5, completed_level: 5 },
    { id: 5, name: 'Credit Management', company: 2, premium: false, taken: false, completed: false, total_level: 5 },
    { id: 6, name: 'Risk Management', company: 1, premium: false, taken: true, completed: true, total_level: 5, completed_level: 5 },
    { id: 7, name: 'Personal finance', company: 1, premium: true, taken: true, completed: false, total_level: 5, completed_level: 4 },
    { id: 8, name: 'Real Estate', company: 3, premium: true, taken: false, completed: false, total_level: 10 },
    { id: 9, name: 'Entrepreneurship', company: 3, premium: true, taken: false, completed: false, total_level: 10 },
    { id: 10, name: 'Saving', company: 4, premium: false, taken: true, completed: false, total_level: 10, completed_level: 5 },
    { id: 11, name: 'Financial Analyst Training', company: 4, premium: true, taken: true, completed: false, total_level: 5, completed_level: 3 },
    { id: 12, name: 'Insurance', company: 4, premium: false, taken: false, completed: false, total_level: 10 }
  ]
})

export const getters = {
  getSelectedCourse (state) {
    return state.selectedCourse
  },
  getCourses (state) {
    return state.courses
  },
  getRecommendedCourses (state) {
    const c = state.courses.filter((course) => {
      return course.taken === false
    })
    return c
  },
  getCurrentCourses (state) {
    const c = state.courses.filter((course) => {
      return course.taken === true
    })
    return c
  },
  getRecentCourse (state) {
    return state.courses[0]
  },
  isEnrolled (state) {
    return state.selectedCourse.taken
  }
}

export const mutations = {
  updateSelectedCourse (state, course) {
    state.selectedCourse = course
  }
}

export const actions = {
  changeSelectedCourse ({ commit, state }, courses) {
    commit('updateSelectedCourse', courses)
  }
}
