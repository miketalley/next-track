import { get } from '@/utils/spotify';

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
      get(`search/${state.term}`);
    }
  }
};
