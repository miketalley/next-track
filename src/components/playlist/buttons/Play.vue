<template>
  <v-btn
    color="#1DB954"
    @click="play"
  >
    Play
  </v-btn>
</template>

<script>
export default {
  props: {
    playlist: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    play() {
      this.$store.dispatch('PLAY_PLAYLIST', this.playlist);
    }
  }
};
</script>
