<template>
  <v-row>
    <v-col class="py-0">
      <secondary-button icon="shuffle" title="Shuffle" @click.native="toggleShuffle" />
    </v-col>
    <v-col class="py-0">
      <secondary-button icon="skip-previous" title="Previous Song" @click.native="previousSong" />
    </v-col>
    <v-col class="py-0">
      <play-button />
    </v-col>
    <v-col class="py-0">
      <secondary-button icon="skip-next" title="Next Song" @click.native="nextSong" />
    </v-col>
    <v-col class="py-0">
      <secondary-button icon="repeat" title="Repeat" @click.native="toggleRepeat" />
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';
import PlayButton from '@/components/buttons/Play.vue';
import SecondaryButton from '@/components/buttons/icon/SecondaryCircular.vue';

export default {
  components: {
    PlayButton,
    SecondaryButton
  },
  data() {
    return {};
  },
  computed: {
    ...mapState([
      'spotify'
    ])
  },
  methods: {
    play() {
      this.$store.dispatch('PLAY_SONG');
    },
    previousSong() {
      console.log('Previous Song - not yet implemented!');
    },
    nextSong() {
      console.log('Next Song - not yet implemented!');
    },
    toggleShuffle() {
      console.log('Toggle Shuffle - not yet implemented!');
    },
    toggleRepeat() {
      console.log('Toggle Repeat - not yet implemented!');
    }
  }
};
</script>
