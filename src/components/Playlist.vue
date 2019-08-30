<template>
  <v-row v-if="playlist" justify="center" align="end">
    <v-col sm="auto">
      <playlist-image :playlist="playlist" />
    </v-col>
    <v-col class="pt-0">
      <v-row>
        <v-col cols="12">
          Playlist
        </v-col>
        <v-col cols="12">
          <h3 class="display-2">
            {{ playlist.name }}
          </h3>
        </v-col>
        <v-col cols="12">
          Created by
          {{ playlist.owner.display_name }} - {{ playlist.tracks.total }} tracks,
          <duration :playlist="playlist" />
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col cols="12">
              <play :playlist="playlist" />
              <more class="mx-3" :playlist="playlist" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <song-list :playlist="playlist" />
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';
import moment from 'moment';
import Play from '@/components/playlist/buttons/Play.vue';
import More from '@/components/playlist/buttons/More.vue';
import Duration from '@/components/playlist/Duration.vue';
import PlaylistImage from '@/components/playlist/Image.vue';
import SongList from '@/components/playlist/SongList.vue';

export default {
  components: {
    Duration,
    More,
    PlaylistImage,
    Play,
    SongList
  },
  props: {
    id: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      playlist: null
    };
  },
  computed: {
    ...mapState([
      'spotify'
    ])
  },
  created() {
    this.loadPlaylist(this.$props.id);
  },
  methods: {
    loadPlaylist(id) {
      this.$store.dispatch('SPOTIFY_GET', `playlists/${id}`).then((resp) => {
        console.log('Playlist: ', resp.data);
        this.playlist = resp.data;
      });
    },
    duration(playlist) {
      let playlistDurationMS = 0;

      playlist.tracks.items.forEach((item) => {
        playlistDurationMS += item.track.duration_ms;
      }, 0);

      console.log('Playlist Duration MS: ', playlistDurationMS);
      const playlistTime = moment.duration(playlistDurationMS, 'milliseconds');
      const playlistDays = playlistTime.days();
      const playlistHours = playlistTime.hours();
      const playlistMinutes = playlistTime.minutes();
      const playlistSeconds = playlistTime.seconds();

      return `${playlistDays}d ${playlistHours}h ${playlistMinutes}m ${playlistSeconds}s`;
    }
  },
  watch: {
    id: 'loadPlaylist'
  }
};
</script>
