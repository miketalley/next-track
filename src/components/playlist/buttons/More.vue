<template>
  <v-menu bottom left>
    <template v-slot:activator="{ on }">
      <v-btn
        fab
        dark
        small
        outlined
        v-on="on"
      >
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-btn>
    </template>

    <v-list dense>
      <v-list-item link>
        <v-list-item-title>
          Go to Playlist Radio
        </v-list-item-title>
      </v-list-item>

      <v-divider />

      <v-list-item link>
        <v-list-item-title>
          Collaborative Playlist
        </v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-title>
          Make Secret
        </v-list-item-title>
      </v-list-item>

      <v-divider />

      <v-list-item link>
        <v-list-item-title>
          Edit Details
        </v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-title>
          Report
        </v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-title>
          Delete
        </v-list-item-title>
      </v-list-item>

      <v-divider />

      <v-list-item link>
        <v-list-item-title>
          Create Similar Playlist
        </v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-title>
          Download
        </v-list-item-title>
      </v-list-item>

      <v-divider />

      <v-list-item link>
        <v-list-item-title>
          Share
        </v-list-item-title>
      </v-list-item>

    </v-list>
  </v-menu>
</template>

<script>

export default {
  props: {
    playlist: {
      type: Object,
      required: false
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
