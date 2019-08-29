<template>
  <v-row>
    <v-col cols="12">
      <v-text-field
        v-model="search.term"
        label="Endpoint"
        outlined
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-textarea
        v-model="result"
        label="Result"
        outlined
        auto-grow
      ></v-textarea>
    </v-col>
    <v-col cols="12">
      <v-btn @click="submit">Submit</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      result: null
    };
  },
  computed: {
    ...mapState([
      'search'
    ])
  },
  methods: {
    submit() {
      this.$store.dispatch('SPOTIFY_GET', this.search.term).then((resp) => {
        console.log('Result: ', resp.data);
        this.result = JSON.stringify(resp.data, null, 2);
      });
    }
  }
};
</script>
