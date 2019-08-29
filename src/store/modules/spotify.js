import axios from 'axios';

export default {
  state: {
    playlists: []
  },
  mutations: {},
  actions: {
    SPOTIFY_GET({ rootState }, endpoint) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: `https://api.spotify.com/v1/${endpoint}`,
          headers: {
            Authorization: `Bearer ${rootState.user.spotify.tokenData.access_token}`
          }
        }).then(resolve).catch((e) => {
          console.log('SPOTIFY_GET Error: ', e);
          reject(e);
        });
      });
    },
    LOAD_PLAYLISTS({ dispatch, state }) {
      dispatch('SPOTIFY_GET', 'me/playlists').then((resp) => {
        state.playlists = resp.data.items;
      });
    }
  }
};
