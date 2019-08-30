<template>
  <v-footer app>
    <v-row>
      <v-col class="text-start">
        <current-song />
      </v-col>
      <v-col class="text-center">
        <song-controls />
      </v-col>
      <v-col class="text-end">
        <controls />
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { mapState } from 'vuex';
import CurrentSong from '@/components/CurrentSong.vue';
import SongControls from '@/components/SongControls.vue';
import Controls from '@/components/Controls.vue';

export default {
  components: {
    Controls,
    CurrentSong,
    SongControls
  },
  data() {
    return {};
  },
  created() {},
  computed: {
    ...mapState([
      'spotify'
    ])
  },
  methods: {}
};
</script>
