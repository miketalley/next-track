<template>
  <v-row justify="center">
    <v-col cols="12">
      Code: {{ code }}
    </v-col>
    <v-col cols="12">
      State: {{ state }}
    </v-col>
    <v-col cols="12">
      Error: {{ error }}
    </v-col>
  </v-row>
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
    if (window.opener) {
      window.opener.authComplete(this.$props);
      window.close();
    } else {
      window.location.reload();
    }
  }
};
</script>
