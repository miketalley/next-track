<template>
  <v-app id="inspire">

    <drawer v-if="user.accessToken" />
    <toolbar v-if="user.accessToken" />

    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>

    <v-footer app>
      <v-layout wrap>
        <v-flex xs12 text-end>
          &copy; 2019 Mike Talley
        </v-flex>
      </v-layout>
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
  },
  computed: {
    ...mapState([
      'user'
    ])
  },
  methods: {
    loadCookies() {
      this.$store.commit('LOGIN', Cookies.getJSON('SPOTIFY_ACCESS_TOKEN_DATA'));
    }
  }
};
</script>
