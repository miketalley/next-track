import Cookies from 'js-cookie';
// import router from '@/router/index';

export default {
  state: {
    accessToken: null,
    refreshToken: null,
    expiresIn: null,
    tokenType: null,
    scope: null,
    loggedIn: false
  },
  mutations: {
    LOGIN(state, data) {
      if (data) {
        console.log('User State: ', state);
        Cookies.set('SPOTIFY_ACCESS_TOKEN_DATA', data, { expires: data.expires_in });
        state.accessToken = data.access_token;
        state.refreshToken = data.refresh_token;
        state.expiresIn = data.expires_in;
        state.tokenType = data.token_type;
        state.scope = data.scope;
        state.loggedIn = true;
        // router.push('home');
      }
    },
    LOGOUT(state) {
      Cookies.set('SPOTIFY_ACCESS_TOKEN', null);
      state.loggedIn = false;
      // router.push('auth');
    }
  }
};
