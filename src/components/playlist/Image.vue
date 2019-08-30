<template>
  <div>
    <img
      :src="playlist.images[0].url"
      height="250"
      width="250"
    >
  </div>
</template>

<script>
export default {
  props: {
    playlist: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>
