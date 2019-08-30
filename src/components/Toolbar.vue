<template>
  <v-app-bar
  app
  clipped-left
>
  <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
  <v-toolbar-title>Spotify Clone</v-toolbar-title>
  <v-spacer />
  <v-btn
    color="#1DB954"
    @click="logout"
  >
    Logout
  </v-btn>
</v-app-bar>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    toggleDrawer() {
      this.$store.commit('TOGGLE_DRAWER');
    },
    logout() {
      this.$store.commit('LOGOUT');
    }
  }
};
</script>
