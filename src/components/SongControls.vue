<template>
  <v-row>
    <v-col>
      <v-btn
        fab
        dark
        small
        outlined
        color="white"
      >
        <v-icon dark>mdi-play</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';
import SongImage from '@/components/song/Image.vue';

export default {
  components: {
    SongImage
  },
  data() {
    return {};
  },
  computed: {
    ...mapState([
      'spotify'
    ]),
    artist() {
      return this.spotify.currentSong.track.artists.map(artist => artist.name).join(', ');
    }
  },
  methods: {}
};
</script>
