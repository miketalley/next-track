<template>
  <span>
    {{ duration(playlist) }}
  </span>
</template>

<script>
import { playlistDuration } from '@/utils/time';

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
    duration: playlistDuration
  }
};
</script>
