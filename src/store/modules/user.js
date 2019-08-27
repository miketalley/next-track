import Cookies from 'js-cookie';

export default {
  state: {
    spotifyAccessToken: null,
    loggedIn: false
  },
  mutations: {
    LOGIN(state, token) {
      Cookies.set('SPOTIFY_ACCESS_TOKEN', token, { expires: 30 });
      state.spotifyAccessToken = token;
      state.loggedIn = true;
    },
    LOGOUT(state) {
      Cookies.set('SPOTIFY_ACCESS_TOKEN', null);
      state.spotifyAccessToken = null;
      state.loggedIn = false;
      this.$router.push('auth');
    }
  }
};
