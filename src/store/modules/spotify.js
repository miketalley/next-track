import axios from 'axios';
import router from '@/router/index';
import { createPlayer, play } from '@/utils/spotify';

export default {
  state: {
    player: null,
    playlists: [],
    currentPlaylist: null,
    currentSong: null,
    devices: null,
    deviceId: null,
    playerState: {}
  },
  mutations: {
    INIT(state) {
      state.playerState.paused = true;
      console.log('State: ', state);
    },
    SET_DEVICE_ID(state, deviceId) {
      state.deviceId = deviceId;
    },
    SET_PLAYER_STATE(state, playerState) {
      console.log('Player State: ', playerState);
      state.playerState = playerState;
    }
  },
  actions: {
    CREATE_SPOTIFY_PLAYER({ commit, getters, state }) {
      state.player = createPlayer({
        getToken: () => getters.GET_SPOTIFY_ACCESS_TOKEN,
        setDeviceId: deviceId => commit('SET_DEVICE_ID', deviceId),
        updatePlayerState: playerState => commit('SET_PLAYER_STATE', playerState)
      });
    },
    SPOTIFY_GET({ rootState }, endpoint) {
      return new Promise((resolve, reject) => {
        if (rootState.user.spotify.tokenData) {
          axios({
            method: 'GET',
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
    SPOTIFY_PUT({ rootState }, settings) {
      const { endpoint, data } = settings;
      return new Promise((resolve, reject) => {
        if (rootState.user.spotify.tokenData) {
          axios({
            method: 'PUT',
            url: `https://api.spotify.com/v1/${endpoint}`,
            data,
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
    LOAD_DEVICES({ dispatch, state }) {
      dispatch('SPOTIFY_GET', 'me/player/devices').then((resp) => {
        state.devices = resp.data.devices;
      });
    },
    PLAY_SONG({ state }, song) {
      const songToPlay = song || state.currentSong;

      state.currentSong = songToPlay;
      play({
        playerInstance: state.player,
        spotifyURI: songToPlay.track.uri
      });
    },
    PAUSE_SONG({ state, dispatch }) {
      dispatch('SPOTIFY_PUT', {
        endpoint: 'me/player/pause',
        data: {
          device_id: state.deviceId
        }
      });
    },
    PLAY_PLAYLIST({ state, dispatch }, playlist) {
      state.currentPlaylist = playlist;
      // TODO - Make this more robust?
      dispatch('PLAY_SONG', playlist.tracks.items[0]);
    }
  }
};
