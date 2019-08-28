<template>
  <v-layout wrap text-center>
    <v-flex py-4 xs12 class="headline">
      Authenticate with Spotify
    </v-flex>
    <v-flex pb-4 xs12>
      <img src="/img/spotify_logo.png" width="300px" height="auto">
    </v-flex>
    <v-flex xs12>
      <v-btn
        color="#1DB954"
        @click="auth"
      >
        Login with Spotify
      </v-btn>
    </v-flex>
    <v-flex v-if="error" xs12>
      Error: {{ error }}
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
import { $SPOTIFY_CLIENT_ID } from '@/utils/globals';

export default {
  data() {
    return {
      error: null,
      redirectUri: `${window.location.origin}/authReturn`
    };
  },
  computed: {
    ...mapState([
      'user'
    ])
  },
  methods: {
    authComplete(data) {
      const { code, error } = data;

      if (error) {
        this.error = error;
      } else {
        this.obtainAccessToken(code);
      }
    },
    auth() {
      window.authComplete = this.authComplete;
      window.open(
        `https://accounts.spotify.com/authorize?client_id=${$SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${this.redirectUri}&state=34fFs29kd09`,
        '_blank',
        'height=700, width=400, status=yes, toolbar=no, menubar=no, location=no'
      );
    },
    obtainAccessToken(code) {
      axios({
        method: 'POST',
        url: `${window.location.protocol}//${window.location.hostname}:1337/accessToken`,
        data: {
          code,
          redirect_uri: this.redirectUri
        }
      }).then((resp) => {
        console.log('Access Token Resp: ', resp.data);
        this.$store.commit('LOGIN', resp.data);
      });
    }
  }
};
</script>
