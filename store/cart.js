export const state = () => ({
  cartList: []
})

export const mutations = {
  ADD_ITEM(state, item) {
    state.cartList.push(item)
  },

}

export const actions = {
  addItem({commit}, item) {
    commit('ADD_ITEM', item)
  },

}


export const getters = {
  getCartList: (state) => {
    return state.cartList
  }
}