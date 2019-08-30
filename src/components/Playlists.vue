<template>
  <v-row>
    <v-col cols="12">
      <v-row
        v-for="playlist in spotify.playlists"
        :key="playlist.name"
        align="center"
        @click="showPlaylistDetails(playlist.id)">
        <v-col sm="auto">
          <img
            :src="playlist.images[0].url"
            height="90"
            width="90"
          >
        </v-col>
        <v-col class="pt-0">
          <h3 class="subheading">
            {{ playlist.name }}
          </h3>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      playlists: []
    };
  },
  computed: {
    ...mapState([
      'spotify'
    ])
  },
  created() {
    this.$store.dispatch('LOAD_PLAYLISTS');

    // this.$store.commit('CONTENT_LOADING', true);
    // this.$store.dispatch('LOAD_PLAYLISTS').then(() => {
    //   this.$store.commit('CONTENT_LOADING', false);
    // });
  },
  methods: {
    showPlaylistDetails(id) {
      console.log('Playlist: ', id);
      this.$router.push(`playlists/${id}`);
    }
  }
};
</script>
