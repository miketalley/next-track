const request = require('request');

module.exports = (
  server
) => {
  server.post('/accessToken', (req, res) => {
    // eslint-disable-next-line camelcase
    const { code, redirect_uri } = req.body;

    console.log('Request Body: ', req.body);

    console.log('Requesting Access Token with: ', {
      grant_type: 'authorization_code',
      code,
      redirect_uri,
      client_id: process.env.VUE_APP_SPOTIFY_CLIENT_ID,
      client_secret: process.env.VUE_APP_SPOTIFY_CLIENT_SECRET
    });

    request.post({
      url: 'https://accounts.spotify.com/api/token',
      form: {
        grant_type: 'authorization_code',
        code,
        redirect_uri,
        client_id: process.env.VUE_APP_SPOTIFY_CLIENT_ID,
        client_secret: process.env.VUE_APP_SPOTIFY_CLIENT_SECRET
      }
    }, (error, response, body) => {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.

      res.send(body);
    });
  });
};
