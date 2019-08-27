<template>
  <v-layout wrap text-center>
    <v-flex py-4 xs12>
      Code: {{ code }}
    </v-flex>
    <v-flex pb-4 xs12>
      State: {{ state }}
    </v-flex>
    <v-flex pb-4 xs12>
      Error: {{ error }}
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    error: {
      type: String,
      required: false
    }
  },
  data() {
    return {};
  },
  created() {
    const { code, error } = this.$props;
    if (!error && code) {
      this.$cookie.set('SPOTIFY_ACCESS_TOKEN', code, 90);
      if (window.opener) {
        window.opener.location = '/';
        window.close();
      }
    }
  }
};
</script>

<style scoped>
/* .auth-container {
  background: black;
} */
</style>
