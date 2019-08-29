<template>
  <v-navigation-drawer
      v-model="ui.drawer"
      app
      clipped
    >
    <v-list dense>
      <v-list-item link v-for="component in componentsMenu" :key="component.route">
        <v-list-item-content>
          <v-list-item-title>
            <router-link :to="component.route">
              {{ component.title }}
            </router-link>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    componentsMenu: [
      {
        title: 'Home',
        route: 'home'
      },
      {
        title: 'Auth',
        route: 'auth'
      },
      {
        title: 'Playlists',
        route: 'playlists'
      }
    ]
  }),
  computed: {
    ...mapState([
      'ui'
    ])
  },
  methods: {
    toggleDrawer() {
      this.$store.commit('TOGGLE_DRAWER');
    }
  }
};
</script>
