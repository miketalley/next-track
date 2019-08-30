export default {
  state: {
    drawer: false,
    content: {
      loading: false
    },
    volume: 100
  },
  mutations: {
    CONTENT_LOADING(state, isLoading) {
      state.content.loading = isLoading;
    },
    SET_DRAWER_STATE(state, newState) {
      state.drawer = newState;
    },
    TOGGLE_DRAWER(state) {
      state.drawer = !state.drawer;
    },
    SET_VOLUME(state, volume) {
      state.volume = volume;
    }
  },
  actions: {}
};
