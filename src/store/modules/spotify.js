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
              'Content-Type': 'application/json',
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
    SPOTIFY_PUT({ state, rootState }, settings) {
      const { endpoint, data } = settings;
      return new Promise((resolve, reject) => {
        if (rootState.user.spotify.tokenData) {
          fetch(`https://api.spotify.com/v1/${endpoint}?device_id=${state.deviceId}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${rootState.user.spotify.tokenData.access_token}`
            }
          }).then(resolve);
          // axios({
          //   method: 'PUT',
          //   url: `https://api.spotify.com/v1/${endpoint}`,
          //   data,
          //   headers: {
          //     'Content-Type': 'application/json',
          //     Authorization: `Bearer ${rootState.user.spotify.tokenData.access_token}`
          //   }
          // }).then(resolve).catch((e) => {
          //   console.log('SPOTIFY_GET Error: ', e);
          //   reject(e);
          // });
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
    LOAD_PLAYER({ state, rootState }) {
      fetch(`https://api.spotify.com/v1/me/player?device_id=${state.deviceId}`, {
        method: 'PUT',
        body: JSON.stringify({
          device_ids: [state.deviceId]
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${rootState.user.spotify.tokenData.access_token}`
        }
      }).then(resp => resp.json());
    },
    PLAY({ dispatch, state }, item) {
      // eslint-disable-next-line camelcase
      const context_uri = item.tracks && item.uri;
      const uris = item.track && [item.track.uri];

      dispatch('SPOTIFY_PUT', {
        endpoint: 'me/player/play',
        data: {
          device_id: state.deviceId,
          context_uri,
          uris,
          position_ms: state.playerState.position
        }
      });
    },
    PLAY_SONG({ dispatch, state }, song) {
      // TODO - remove this and use playerState
      const songToPlay = song || state.currentSong;
      state.currentSong = songToPlay;

      dispatch('PLAY', song);
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
      dispatch('PLAY', playlist);
    }
  }
};
