<template>
  <v-app id="inspire">

    <drawer v-if="loggedIn" />
    <toolbar v-if="loggedIn" />

    <v-content>
      <v-container>
        <v-overlay :value="ui.content.loading">
          <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
        <router-view v-if="!ui.content.loading" />
      </v-container>
    </v-content>

    <v-footer app>
      <v-col class="text-end">
        &copy; 2019 Mike Talley
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Cookies from 'js-cookie';
import { mapState } from 'vuex';
import Drawer from '@/components/nav/Drawer.vue';
import Toolbar from '@/components/Toolbar.vue';

export default {
  components: {
    Drawer,
    Toolbar
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
