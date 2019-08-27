<template>
  <v-app-bar
  app
  clipped-left
>
  <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
  <v-toolbar-title>Next Track</v-toolbar-title>
</v-app-bar>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({}),
  computed: {
    ...mapState([
      'ui'
    ])
  },
  methods: {
    toggleDrawer() {
      this.$store.commit('toggleDrawer');
    }
  }
};
</script>
