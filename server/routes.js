const request = require('request');

module.exports = (
  server
) => {
  server.post('/accessToken', (req, res) => {
    // eslint-disable-next-line camelcase
    const { code, redirect_uri } = req.body;

    request.post({
      url: 'https://accounts.spotify.com/api/token',
      form: {
        grant_type: 'authorization_code',
        code,
        redirect_uri,
        client_id: process.env.VUE_APP_SPOTIFY_CLIENT_ID,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET
      }
    }, (error, response, body) => {
      res.send(body);
    });
  });
};
