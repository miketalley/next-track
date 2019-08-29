<template>
  <v-row class="text-center">
    <v-col cols="12" class="display-2">
      Next Track
    </v-col>
    <v-col cols="12">
      <v-row justify="center">
        <v-col cols="6">
          Our app needs permission to obtain your Spotify data to provide an
          enhanced music experience. Login with Spotify to continue.
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <img src="/img/spotify_logo.png" width="300px" height="auto">
    </v-col>
    <v-col cols="12">
      <v-btn
        color="#1DB954"
        @click="auth"
      >
        Login with Spotify
      </v-btn>
    </v-col>
    <v-col cols="12" v-if="error" xs12>
      Error: {{ error }}
    </v-col>
  </v-row>
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
        this.$store.dispatch('LOGIN', resp.data);
      });
    }
  }
};
</script>
