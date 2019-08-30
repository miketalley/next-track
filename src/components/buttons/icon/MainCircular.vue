<template>
  <v-btn
    fab
    dark
    small
    outlined
    :color="color"
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
      default: 'white'
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
