import axios from 'axios';
import {
  $SPOTIFY_CLIENT_ID
} from '@/utils/globals';

export default {
  state: {
    code: null,
    state: null
  },
  mutations: {
    TOGGLE_DRAWER(state, loginData) {
      state.code = loginData.code;
      state.state = loginData.state;
    }
  },
  actions: {
    AUTH_USER() {
      return axios.get(`https://accounts.spotify.com/authorize?client_id=${$SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${window.location.origin}/authReturn&state=34fFs29kd09`);
    }
  }
};
