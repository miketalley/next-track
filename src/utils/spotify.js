import axios from 'axios';

function hitSpotifyEndpoint(endpoint, tokenData) {
  return axios({
    method: 'get',
    url: `https://api.spotify.com/v1/${endpoint}`,
    headers: {
      Authorization: `Bearer ${tokenData.access_token}`
    }
  }).then(resolve).catch((e) => {
    console.log('SPOTIFY_GET Error: ', e);
  });
}

function refreshTokenData(){}

export const get = (endpoint, tokenData) => new Promise((resolve, reject) => {
  if (tokenData) {
    hitSpotifyEndpoint(endpoint, tokenData);
  } else {
    refreshTokenData().then(hitSpotifyEndpoint);
  }
});

export default {
  get
};
