<template>
  <v-layout wrap text-center>
    <v-flex py-4 xs12>
      Code: {{ code }}
    </v-flex>
    <v-flex pb-4 xs12>
      State: {{ state }}
    </v-flex>
    <v-flex pb-4 xs12>
      Error: {{ error }}
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    error: {
      type: String,
      required: false
    }
  },
  data() {
    return {};
  },
  created() {
    console.log('Props: ', this.$props);
  }

};
</script>

<style scoped>
/* .auth-container {
  background: black;
} */
</style>
