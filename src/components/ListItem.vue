<script>
import {
  VListItem,
  VListItemTitle,
  VDivider
} from 'vuetify/lib';

export default {
  functional: true,
  render(h, { props }) {
    const c = [];

    c.push(h(VListItemTitle, props.title));
    if (props.divider) {
      c.push(h(VDivider));
    }

    return h(VListItem, {
      link: true
    }, c);
  },
  components: {
    VDivider,
    VListItem,
    VListItemTitle
  },
  props: {
    title: {
      type: String,
      required: true
    },
    divider: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {};
  }
};
</script>
