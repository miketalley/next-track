<template>
  <v-row>
    <v-col>
      <secondary-button :icon="shuffle" @click="toggleShuffle" />
    </v-col>
    <v-col>
      <secondary-button :icon="skip-previous" @click="previousSong" />
    </v-col>
    <v-col>
      <main-button :icon="play" @click="play" />
    </v-col>
    <v-col>
      <secondary-button :icon="skip-next" @click="nextSong" />
    </v-col>
    <v-col>
      <secondary-button :icon="repeat" @click="toggleRepeat" />
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';
import MainButton from '@/components/buttons/icon/MainCircular.vue';
import SecondaryButton from '@/components/buttons/icon/SecondaryCircular.vue';

export default {
  components: {
    MainButton,
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
      console.log('Play - not yet implemented!');
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
