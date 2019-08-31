export const play = ({
  spotifyURI,
  playerInstance: {
    _options: {
      getOAuthToken,
      id
    }
  }
}) => {
  getOAuthToken((accessToken) => {
    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
      method: 'PUT',
      body: JSON.stringify({ uris: [spotifyURI] }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    });
  });
};

export const initializeSDK = (store) => {
  window.SpotifyWebPlayerReady.then(() => {
    store.dispatch('CREATE_SPOTIFY_PLAYER');
  });
};

export const createPlayer = ({
  getToken,
  setDeviceId,
  updatePlayerState
}) => {
  const player = new window.Spotify.Player({
    name: 'Spotify Clone Player',
    getOAuthToken: (cb) => {
      cb(getToken());
    },
    volume: 0.5
  });

  // Error handling
  const listeners = [
    'initialization_error',
    'authentication_error',
    'account_error',
    'playback_error'
  ];

  listeners.forEach((listener) => {
    player.addListener(listener, ({ message }) => {
      console.error(`Spotify ${listener} error: ${message}`);
    });
  });

  // Playback status updates
  player.addListener('player_state_changed', updatePlayerState);

  // Ready
  // eslint-disable-next-line camelcase
  player.addListener('ready', ({ device_id }) => {
    setDeviceId(device_id);
  });

  // Not Ready
  player.addListener('not_ready', () => {
    setDeviceId(null);
  });

  // Connect to the player!
  player.connect().then((success) => {
    if (success) {
      console.log('Spotify player connected successfully!');
    } else {
      console.log('Spotify player did not connect!');
    }
  });

  return player;
};

export default {
  play,
  initializeSDK,
  createPlayer
};
