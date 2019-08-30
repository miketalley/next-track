<template>
  <v-slider
    v-model="volume"
    append-icon="mdi-volume-plus"
    prepend-icon="mdi-volume-minus"
    title="Volume"
  ></v-slider>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      volume: 100
    };
  },
  computed: {
    ...mapState([
      'ui'
    ])
  },
  methods: {},
  watch: {
    volume(newVolume) {
      this.$store.commit('SET_VOLUME', newVolume);
    }
  }
};
</script>
