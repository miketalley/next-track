<template>
  <main-button
    :icon="iconFunction"
    :title="title"
    @click.native="click" />
</template>

<script>
import { mapState } from 'vuex';
import MainButton from '@/components/buttons/icon/MainCircular.vue';

export default {
  components: {
    MainButton
  },
  props: {
    song: {
      type: Object,
      required: false
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapState([
      'spotify'
    ]),
    iconFunction() {
      let playingStatus = this.spotify.playerState.paused ? 'play' : 'pause';

      if (this.song && this.spotify.currentSong !== this.song) {
        playingStatus = 'play';
      }

      return playingStatus;
    },
    title() {
      return this.iconFunction.charAt(0).toUpperCase() + this.iconFunction.slice(1);
    }
  },
  methods: {
    click() {
      this.$store.dispatch(`${this.iconFunction.toUpperCase()}_SONG`, this.song || this.spotify.currentSong);
    }
  }
};
</script>
