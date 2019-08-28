<template>
  <v-layout wrap>
    <v-flex xs12>
      <v-text-field
        v-model="search.term"
        label="Endpoint"
        outlined
      ></v-text-field>
    </v-flex>
    <v-flex xs12>
      <v-textarea
        v-model="result"
        label="Result"
        outlined
      ></v-textarea>
    </v-flex>
    <v-flex xs12>
      <v-btn @click="submit">Submit</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';

export default {
  data() {
    return {
      result: null
    };
  },
  computed: {
    ...mapState([
      'search',
      'user'
    ])
  },
  methods: {
    submit() {
      axios({
        method: 'get',
        url: `https://api.spotify.com/v1/${this.search.term}`,
        headers: {
          Authorization: `Bearer ${this.user.accessToken}`
        }
      }).then((resp) => {
        console.log('Result: ', resp.data);
        this.result = JSON.stringify(resp.data);
      });
    }
  }
};
</script>
