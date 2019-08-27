import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import search from '@/store/modules/search';
import ui from '@/store/modules/ui';
import user from '@/store/modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    search,
    ui,
    user
  },
  plugins: [createPersistedState()]
});
