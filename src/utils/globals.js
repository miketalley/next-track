import axios from 'axios';

export const $spotifyApiRoot = 'https://api.spotify.com/v1/';
export const $SPOTIFY_CLIENT_ID = process.env.VUE_APP_SPOTIFY_CLIENT_ID;
export const $SPOTIFY_CLIENT_SECRET = process.env.VUE_APP_SPOTIFY_CLIENT_SECRET;
export const $http = axios.create({
  baseURL: $spotifyApiRoot,
  timeout: 1000
});

export default {
  $http,
  $spotifyApiRoot,
  $SPOTIFY_CLIENT_ID,
  $SPOTIFY_CLIENT_SECRET
};
