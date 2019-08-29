import Cookies from 'js-cookie';
import router from '@/router/index';

export default {
  state: {
    spotify: {
      tokenData: null,
      user: null
    }
  },
  mutations: {
    SET_SPOTIFY_TOKEN(state, data) {
      if (data) {
        // expires_in is in seconds so we convert to hours and divide by 24
        const expirationInDays = ((data.expires_in / 60) / 60) / 24;

        Cookies.set('SPOTIFY_ACCESS_TOKEN_DATA', data, { expires: expirationInDays });
        state.spotify.tokenData = data;
        console.log('User State: ', state);
        // router.push('home');
      }
    },
    LOGOUT(state) {
      Cookies.set('SPOTIFY_ACCESS_TOKEN_DATA', null);
      state.spotify.tokenData = null;
      state.spotify.user = null;
      router.push('auth');
    }
  },
  actions: {
    LOGIN({ commit, dispatch }, tokenData) {
      if (tokenData) {
        commit('SET_SPOTIFY_TOKEN', tokenData);
        dispatch('LOAD_SPOTIFY_USER');
      }
    },
    LOAD_SPOTIFY_USER({ dispatch, state }) {
      console.log('Loading spotify user: ', state);
      dispatch('SPOTIFY_GET', 'me').then((resp) => {
        state.spotify.user = resp.data;
      });
    }
  }
};
