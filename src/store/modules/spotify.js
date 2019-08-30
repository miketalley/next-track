import axios from 'axios';
import router from '@/router/index';

export default {
  state: {
    playlists: [],
    currentPlaylist: null,
    currentSong: null
  },
  mutations: {},
  actions: {
    SPOTIFY_GET({ rootState }, endpoint) {
      return new Promise((resolve, reject) => {
        if (rootState.user.spotify.tokenData) {
          axios({
            method: 'get',
            url: `https://api.spotify.com/v1/${endpoint}`,
            headers: {
              Authorization: `Bearer ${rootState.user.spotify.tokenData.access_token}`
            }
          }).then(resolve).catch((e) => {
            console.log('SPOTIFY_GET Error: ', e);
            reject(e);
          }).finally((foo, bar) => {
            console.log('Finally: ', foo, bar);
          });
        } else {
          router.push({ name: 'auth' });
        }
      });
    },
    LOAD_PLAYLISTS({ dispatch, state }) {
      dispatch('SPOTIFY_GET', 'me/playlists').then((resp) => {
        state.playlists = resp.data.items;
      });
    },
    PLAY_SONG({ state }, song) {
      // TODO - Actually play it
      state.currentSong = song;
    },
    PLAY_PLAYLIST({ state, dispatch }, playlist) {
      state.currentPlaylist = playlist;
      // TODO - Make this more robust?
      dispatch('PLAY_SONG', playlist.tracks.items[0]);
    }
  }
};
