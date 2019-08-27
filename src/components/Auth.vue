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
      <v-btn
        color="#1DB954"
        @click="logStore"
      >
        Log Store
      </v-btn>
    </v-flex>
    <v-flex v-if="error" xs12>
      Error: {{ error }}
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex';
import { $SPOTIFY_CLIENT_ID } from '@/utils/globals';

export default {
  data() {
    return {
      error: null
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
        this.$store.commit('LOGIN', code);
        this.$router.push('home');
      }
    },
    auth() {
      window.authComplete = this.authComplete;
      window.open(
        `https://accounts.spotify.com/authorize?client_id=${$SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${window.location.origin}/authReturn&state=34fFs29kd09`,
        '_blank',
        'height=700, width=400, status=yes, toolbar=no, menubar=no, location=no'
      );
    },
    logStore() {
      console.log(this.user.spotifyAccessToken);
    }
  }
};
</script>
