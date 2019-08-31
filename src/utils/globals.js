import axios from 'axios';

export const $spotifyApiRoot = 'https://api.spotify.com/v1/';
export const $SPOTIFY_CLIENT_ID = process.env.VUE_APP_SPOTIFY_CLIENT_ID;
export const $SPOTIFY_WEB_SDK_ACCESS_TOKEN = process.env.VUE_APP_SPOTIFY_WEB_SDK_ACCESS_TOKEN;
export const $http = axios.create({
  baseURL: $spotifyApiRoot,
  timeout: 1000
});

export default {
  $http,
  $spotifyApiRoot,
  $SPOTIFY_CLIENT_ID,
  $SPOTIFY_WEB_SDK_ACCESS_TOKEN
};
