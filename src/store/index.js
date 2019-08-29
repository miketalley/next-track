import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import search from '@/store/modules/search';
import spotify from '@/store/modules/spotify';
import ui from '@/store/modules/ui';
import user from '@/store/modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    search,
    spotify,
    ui,
    user
  },
  plugins: [createPersistedState()]
});
