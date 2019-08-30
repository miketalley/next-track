<template>
  <v-list-item link class="mb-0">
    <v-list-item-content>
      <v-row no-gutters justify="center" align="center">
        <v-col cols="1">
          <v-btn
            fab
            dark
            small
            outlined
            color="white"
            @click="play"
          >
            <v-icon dark>mdi-play</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="11" class="mt-0">
          {{ song.track.name }}
        </v-col>
      </v-row>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    song: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    play() {
      console.log('Play Song: ', this.song);
      this.$store.dispatch('PLAY_SONG', this.song);
    }
  }
};
</script>
