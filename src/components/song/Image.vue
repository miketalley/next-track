<template>
  <div>
    <img
      :src="song.track.album.images[0].url"
      height="50"
      width="50"
    >
  </div>
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
  }
};
</script>
