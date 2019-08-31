import axios from 'axios';
import router from '@/router/index';
import { createPlayer, play } from '@/utils/spotify';

export default {
  state: {
    player: null,
    playlists: [],
    currentPlaylist: null,
    currentSong: null
  },
  mutations: {},
  actions: {
    CREATE_SPOTIFY_PLAYER({ getters, state }) {
      state.player = createPlayer(() => getters.GET_SPOTIFY_ACCESS_TOKEN);
    },
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
      const songToPlay = song || state.currentSong;
      console.log('Song to play: ', songToPlay);
      const playData = {
        playerInstance: state.player,
        spotifyURI: songToPlay.track.uri
      };

      console.log('Play Data: ', playData);

      state.currentSong = songToPlay;
      play({
        playerInstance: state.player,
        spotifyURI: songToPlay.track.uri
      });
    },
    PLAY_PLAYLIST({ state, dispatch }, playlist) {
      state.currentPlaylist = playlist;
      // TODO - Make this more robust?
      dispatch('PLAY_SONG', playlist.tracks.items[0]);
    }
  }
};
