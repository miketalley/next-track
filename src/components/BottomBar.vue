<template>
  <v-footer app>
    <v-row>
      <v-col class="text-start pb-0" cols="12" md="4">
        <current-song />
      </v-col>
      <v-col class="text-center pb-0" cols="12" md="4">
        <v-row>
          <v-col cols="12" class="py-0">
            <song-controls />
          </v-col>
          <v-col cols="12">
            <song-status />
          </v-col>
        </v-row>
      </v-col>
      <v-spacer />
      <v-col class="text-end pb-0" cols="12" md="3">
        <controls />
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import CurrentSong from '@/components/song/Current.vue';
import SongControls from '@/components/song/Controls.vue';
import SongStatus from '@/components/song/Status.vue';
import Controls from '@/components/Controls.vue';

export default {
  components: {
    Controls,
    CurrentSong,
    SongControls,
    SongStatus
  },
  data() {
    return {};
  }
};
</script>
