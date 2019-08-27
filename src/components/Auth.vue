<template>
  <v-layout wrap text-center class="auth-container">
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
  </v-layout>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    auth() {
      this.$store.dispatch('AUTH_USER');
    }
  }
};
</script>

<style scoped>
/* .auth-container {
  background: black;
} */
</style>
