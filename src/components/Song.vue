<template>
  <v-list-item link class="mb-0">
    <v-list-item-content>
      <v-row no-gutters justify="center" align="center">
        <v-col cols="1">
          <play-button :song="song" />
        </v-col>
        <v-col cols="11" class="mt-0">
          {{ song.track.name }}
        </v-col>
      </v-row>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import PlayButton from '@/components/buttons/Play.vue';

export default {
  components: {
    PlayButton
  },
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
      this.$store.dispatch('PLAY_SONG', this.song);
    }
  }
};
</script>
