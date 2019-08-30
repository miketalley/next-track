<template>
  <v-btn
    fab
    dark
    small
    text
    :color="color"
    :title="title"
  >
    <v-icon dark>{{ iconName }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: ''
    },
    title: {
      type: String,
      required: false
    }
  },
  data() {
    return {};
  },
  computed: {
    iconName() {
      return `mdi-${this.icon}`;
    }
  },
  methods: {}
};
</script>
