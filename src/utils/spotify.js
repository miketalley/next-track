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
    // console.log('getOAuthToken(play) called with: ', accessToken);
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
  window.onSpotifyWebPlaybackSDKReady = () => {
    store.dispatch('CREATE_SPOTIFY_PLAYER');
  };
};

export const createPlayer = (getToken) => {
  console.log('Creating Spotify Player');
  const player = new window.Spotify.Player({
    name: 'Spotify Clone Player',
    getOAuthToken: (cb) => {
      cb(getToken());
      // console.log('createPlayer getOAuthToken called with: ', foo, bar, baz);
    },
    volume: 0.5
  });

  window.SpotifyPlayer = player;

  // Error handling
  player.addListener('initialization_error', ({ message }) => { console.error(message); });
  player.addListener('authentication_error', ({ message }) => { console.error(message); });
  player.addListener('account_error', ({ message }) => { console.error(message); });
  player.addListener('playback_error', ({ message }) => { console.error(message); });

  // Playback status updates
  player.addListener('player_state_changed', (state) => { console.log(state); });

  // Ready
  player.addListener('ready', ({ deviceId }) => {
    console.log('Ready with Device ID', deviceId);
  });

  // Not Ready
  player.addListener('not_ready', ({ deviceId }) => {
    console.log('Device ID has gone offline', deviceId);
  });

  // Connect to the player!
  const connection = player.connect();

  console.log('Connection: ', connection);

  connection.then((success) => {
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
