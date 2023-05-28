export const state = () => ({
  currentCategory: null,
  categories: [
    { id: 0, name: 'Food', icon: 'shopping-cart-outline', color: '#237ABC', amount: 475.5, colorName: 'primary', img: 'Food' },
    { id: 1, name: 'Transport', icon: 'car-outline', color: '#3BB04A', amount: 950, colorName: 'green', img: 'Car' },
    { id: 2, name: 'Products', icon: 'gift-outline', color: '#F49022', amount: 740, colorName: 'orange', img: 'Item' }
  ],
  expenses: [
    { id: 0, name: 'GrabPay-EC', amount: 1500, category: 0 },
    { id: 1, name: 'GSC Movie', amount: 2500, category: 2 },
    { id: 2, name: 'Rent', amount: 25000, category: 1 },
    { id: 3, name: 'Digi', amount: 6000, category: 1 },
    { id: 4, name: 'Petrol', amount: 5000, category: 0 },
    { id: 5, name: 'Duitnow LAU SAY HENG', amount: 850, category: 0 },
    { id: 6, name: 'ShopeePay Malaysia', amount: 5000, category: 0 },
    { id: 7, name: 'Uniqlo Malaysia', amount: 7000, category: 2 },
    { id: 8, name: 'Duitnow LAU SAY HENG', amount: 1000, category: 0 },
    { id: 9, name: 'Duitnow LAU SAY HENG', amount: 1500, category: 3 },
    { id: 10, name: 'GrabPay-EC', amount: 1500, category: 3 },
    { id: 11, name: 'ShopeePay Malaysia', amount: 1500, category: 3 }
  ],
  savings: [
    { id: 0, name: 'Part-time', amount: 1500, category: 0 },
    { id: 1, name: 'GSC Movie', amount: 2500, category: 2 },
    { id: 2, name: 'Rent', amount: 25000, category: 1 },
    { id: 3, name: 'Digi', amount: 6000, category: 1 },
    { id: 4, name: 'Petrol', amount: 5000, category: 0 },
    { id: 5, name: 'Duitnow LAU SAY HENG', amount: 850, category: 0 },
    { id: 6, name: 'ShopeePay Malaysia', amount: 5000, category: 0 },
    { id: 7, name: 'Uniqlo Malaysia', amount: 7000, category: 2 },
    { id: 8, name: 'Duitnow LAU SAY HENG', amount: 1000, category: 0 },
    { id: 9, name: 'Duitnow LAU SAY HENG', amount: 1500, category: 3 },
    { id: 10, name: 'GrabPay-EC', amount: 1500, category: 3 },
    { id: 11, name: 'ShopeePay Malaysia', amount: 1500, category: 3 }
  ],
  food: [
    { id: 0, name: 'GrabFood', percentage: 20 },
    { id: 1, name: 'Cafe & Restaurant', percentage: 10 },
    { id: 2, name: 'ShopeeFood', percentage: 20 },
    { id: 3, name: 'Petrol', percentage: 40 }
  ],
  housing: [
    { id: 0, name: 'Rent', percentage: 80 },
    { id: 1, name: 'Water & Electricity Bills', percentage: 20 }
  ],
  entertainment: [
    { id: 0, name: 'Movie', percentage: 10 },
    { id: 1, name: 'Clothing', percentage: 60 },
    { id: 2, name: 'Game', percentage: 10 },
    { id: 3, name: 'Bowling', percentage: 20 }
  ],
  other: [
    { id: 0, name: 'Funds Transfer', percentage: 60 },
    { id: 0, name: 'Others', percentage: 40 }
  ]
})

export const getters = {
  getCurrentCategory (state) {
    if (state.currentCategory) {
      return state.currentCategory
    }
    return state.categories[0]
  },
  getCategories (state) {
    return state.categories
  },
  getExpensesList (state) {
    return state.expenses
  },
  getCategoryExpensesList (state) {
    const list = state.expenses.filter((expense) => {
      return expense.category === state.currentCategory.id
    })
    return list
  },
  getFood (state) {
    return state.food
  },
  getHousing (state) {
    return state.housing
  },
  getEntertainment (state) {
    return state.entertainment
  },
  getOther (state) {
    return state.other
  }
}

export const mutations = {
  updateCurrentCategory (state, category) {
    state.currentCategory = category
  }
}

export const actions = {
  changeCurrentCategory ({ commit }, category) {
    commit('updateCurrentCategory', category)
  }
}
