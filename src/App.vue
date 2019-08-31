<template>
  <v-app id="inspire">

    <drawer v-if="loggedIn" />
    <top-bar v-if="loggedIn" />

    <v-content>
      <v-container>
        <v-overlay :value="ui.content.loading">
          <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
        <router-view v-if="!ui.content.loading" />
      </v-container>
    </v-content>

    <bottom-bar v-if="loggedIn" />
  </v-app>
</template>

<script>
import Cookies from 'js-cookie';
import { mapState } from 'vuex';
import Drawer from '@/components/Drawer.vue';
import TopBar from '@/components/TopBar.vue';
import BottomBar from '@/components/BottomBar.vue';

export default {
  components: {
    BottomBar,
    Drawer,
    TopBar
  },
  data() {
    return {
      drawer: null
    };
  },
  created() {
    this.$vuetify.theme.dark = true;
    this.loadCookies();
    this.$store.commit('SET_DRAWER_STATE', false);
    this.$store.commit('CONTENT_LOADING', false);
    this.$store.commit('INIT');
  },
  computed: {
    ...mapState([
      'ui',
      'user'
    ]),
    loggedIn() {
      return this.user.spotify.tokenData;
    }
  },
  methods: {
    loadCookies() {
      this.$store.dispatch('LOGIN', Cookies.getJSON('SPOTIFY_ACCESS_TOKEN_DATA'));
    }
  }
};
</script>
