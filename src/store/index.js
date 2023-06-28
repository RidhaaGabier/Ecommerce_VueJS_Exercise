import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
    product: null,
  },
  mutations: {
    setProducts: (state,products) => {
      state.products = products;
    },
    setTutorial: (state, tutorial) => {
      state.tutorial = tutorial;
    },
  },
  actions: {
    getProducts: async (context) => {
      fetch("http://localhost:3000/products/")
      .then((res) => res.json())
      .then((products) => console.log(products));
    },
    getProduct: async (context,id) => {
      fetch("http://localhost:3000/product/" + id)
      .then((res) => res.json())
      .then((tutorial) => context.commit("setTutorial", tutorial));
    },
  },
});
