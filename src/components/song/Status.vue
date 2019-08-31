<template>
  <v-row>
    <v-col class="py-0" cols="2" xl="1">
      {{ songDurationPlayed }}
    </v-col>
    <v-col class="pb-2" cols="8" xl="10">
      <v-progress-linear
        color="blue darken-2"
        rounded
        :value="percentComplete"
      ></v-progress-linear>
    </v-col>
    <v-col class="py-0" cols="2" xl="1">
      {{ totalSongDuration }}
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';
import { millisecondsToDigital } from '@/utils/time';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState([
      'spotify'
    ]),
    songDurationPlayed() {
      const { position } = this.spotify.playerState;

      return (position && millisecondsToDigital(position)) || '0:00';
    },
    totalSongDuration() {
      const { duration } = this.spotify.playerState;

      return (duration && millisecondsToDigital(duration)) || '0:00';
    },
    percentComplete() {
      const { position, duration } = this.spotify.playerState;

      return position / duration * 100;
    }
  },
  methods: {}
};
</script>
