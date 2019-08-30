<template>
  <v-row>
    <v-col class="py-0" cols="2" xl="1">
      {{ songDurationPlayed }}
    </v-col>
    <v-col class="pb-2" cols="8" xl="10">
      <v-progress-linear
        color="blue darken-2"
        rounded
        value="100"
      ></v-progress-linear>
    </v-col>
    <v-col class="py-0" cols="2" xl="1">
      {{ totalSongDuration }}
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    songDurationPlayed() {
      return '0:00';
    },
    totalSongDuration() {
      return '2:00';
    }
  },
  methods: {}
};
</script>
