<template>
    <div class="anole-image" :style="style"></div>
</template>

<script>
import { createStyle } from '../common/api';

export default {
  name: 'Room',
  props: {
    width: {
      type: [Array, String],
      default: '100%',
    },
    height: {
      type: [Array, String],
      default: '100%',
    },
    margin: {
      type: [Array, String],
      default: '0',
    },
    url: {
      type: [Array, String],
      default: '',
    },
  },
  computed: {
    style() {
      const valueArray = ['width', 'height', 'margin', 'src'];
      return createStyle(valueArray, this);
    },
    src() {
      if (Array.isArray(this.url)) {
        return this.url.map((item) => `url(${item})`);
      }
      return `url(${this.url})`;
    },
  },
};
</script>
