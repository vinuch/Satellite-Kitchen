export const state = () => ({
  cartList: []
})

export const mutations = {
  add(state, item) {
    state.cartList.push(item)
  },

}