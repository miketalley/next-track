<template>
  <v-row>
    <v-col sm="auto">
      <img
        :src="playlist.images[0].url"
        height="250"
        width="250"
      >
    </v-col>
    <v-col class="pt-0">
      <h3 class="subheading">
        {{ playlist.name }}
      </h3>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    // playlist: {
    //   type: Object,
    //   required: false
    // },
    id: {
      type: String,
      required: false
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapState([
      'spotify'
    ])
  },
  created() {
    this.$store.commit('CONTENT_LOADING', true);
    if (!this.playlist) {
      console.log('this.$props.id: ', this.$props.id);
    }
  },
  methods: {}
};
</script>
