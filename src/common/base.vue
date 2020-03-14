<template>
  <div
    class="anole"
    :style="style">
    <slot></slot>
  </div>
</template>

<script>
import { createStyle } from './api';

export default {
  name: 'Base',

  props: {
    width: {
      type: [Array, String],
      default: '100%',
    },
    height: {
      type: [Array, String],
      default: '100%',
    },
    padding: {
      type: [Array, String],
      default: '0',
    },
    margin: {
      type: [Array, String],
      default: '0',
    },
    fontSize: {
      type: [Array, String],
      default: '1rem',
    },
  },

  computed: {
    style() {
      const valueArray = ['width', 'height', 'padding', 'margin', 'fontSize'];
      return createStyle(valueArray, this);
    },
  },
};
</script>
