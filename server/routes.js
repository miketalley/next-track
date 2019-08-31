const request = require('request');

module.exports = (
  server
) => {
  server.post('/accessToken', (req, res) => {
    // eslint-disable-next-line camelcase
    const { code, redirect_uri, scope } = req.body;

    console.log('/accessToken route hit with: ', {
      code,
      redirect_uri,
      scope
    });

    request.post({
      url: 'https://accounts.spotify.com/api/token',
      form: {
        grant_type: 'authorization_code',
        code,
        redirect_uri,
        scope,
        client_id: process.env.VUE_APP_SPOTIFY_CLIENT_ID,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET
      }
    }, (error, response, body) => {
      res.send(body);
    });
  });
};
