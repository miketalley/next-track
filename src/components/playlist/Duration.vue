<template>
  <span>
    {{ duration(playlist) }}
  </span>
</template>

<script>
import moment from 'moment';

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
    duration(playlist) {
      let playlistDurationMS = 0;

      playlist.tracks.items.forEach((item) => {
        playlistDurationMS += item.track.duration_ms;
      }, 0);

      const playlistTime = moment.duration(playlistDurationMS, 'milliseconds');
      const playlistDays = playlistTime.days();
      const playlistHours = playlistTime.hours();
      const playlistMinutes = playlistTime.minutes();
      const playlistSeconds = playlistTime.seconds();

      return `${playlistDays}d ${playlistHours}h ${playlistMinutes}m ${playlistSeconds}s`;
    }
  }
};
</script>
