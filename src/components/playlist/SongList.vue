<script>
import { VList, VDivider } from 'vuetify/lib';
import Song from '@/components/Song.vue';

export default {
  functional: true,
  render(h, { props }) {
    const c = [];
    props.playlist.tracks.items.forEach((song, index) => {
      const s = h(Song, {
        key: song.track.id,
        props: {
          song
        }
      });

      c.push(s);
      if (index + 1 < props.playlist.tracks.items.length) {
        const d = h(VDivider);
        c.push(d);
      }
    });

    return h(VList, c);
  },
  components: {
    Song,
    VDivider,
    VList
  },
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
