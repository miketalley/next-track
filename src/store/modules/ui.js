export default {
  state: {
    drawer: false
  },
  mutations: {
    TOGGLE_DRAWER(state) {
      state.drawer = !state.drawer;
    }
  },
  actions: {}
};
