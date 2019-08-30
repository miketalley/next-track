<template>
  <v-row>
    <v-spacer />
    <v-col cols="1" class="py-0">
      <secondary-button icon="playlist-music" title="Queue" @click="viewQueue" />
    </v-col>
    <v-col cols="1" class="py-0">
      <secondary-button icon="devices" title="Devices" @click="viewDevices" />
    </v-col>
    <v-col cols="9" md="6" class="py-1">
      <volume-control />
    </v-col>
    <v-col cols="1" class="py-0">
      <secondary-button icon="arrow-expand" title="Fullscreen" @click="toggleFullscreen" />
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';
import VolumeControl from '@/components/VolumeControl.vue';
import SecondaryButton from '@/components/buttons/icon/SecondaryCircular.vue';

export default {
  components: {
    VolumeControl,
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
    viewQueue() {
      console.log('View Queue - not yet implemented!');
    },
    viewDevices() {
      console.log('View Devices - not yet implemented!');
    },
    toggleFullscreen() {
      console.log('Toggle Fullscreen - not yet implemented!');
    }
  }
};
</script>
