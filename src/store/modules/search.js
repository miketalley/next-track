import spotify from '@/utils/spotify';

export default {
  state: {
    term: null,
    results: null
  },
  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    }
  },
  actions: {
    runSearch({ state }) {
      spotify.get(`search/${state.term}`);
    }
  }
};
