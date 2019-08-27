<template>
  <v-navigation-drawer
      v-model="ui.drawer"
      app
      clipped
    >
    <v-list dense>
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
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
      this.$store.commit('TOGGLE_DRAWER');
    }
  }
};
</script>
