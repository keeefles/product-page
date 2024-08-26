import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
    product: null,
  },
  getters: {},
  mutations: {
    setProducts(state, value) {
      state.products = value;
    },
    setProduct(state, value) {
      state.product = value;
  },
  actions: {
  },
  modules: {
  }
}});
