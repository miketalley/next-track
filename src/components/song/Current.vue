<template>
  <v-row v-if="spotify.currentSong" align="center">
    <v-col cols="3" md="4" lg="3" xl="2" class="py-0">
      <song-image :song="spotify.currentSong" />
    </v-col>
    <v-col class="py-0">
      <v-row>
        <v-col cols="12" class="pt-1 title">
          {{ spotify.currentSong.track.name }}
        </v-col>
        <v-col cols="12" class="pt-0 subtitle-1">
          {{ artist }}
        </v-col>
      </v-row>
    </v-col>
    <v-spacer />
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
