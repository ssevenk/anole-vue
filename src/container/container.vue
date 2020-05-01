<template>
    <div class="anole-container" :style="style">
      <slot></slot>
    </div>
</template>

<script>
import { createStyle } from '../common/api';

export default {
  name: 'Container',
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
    justifyContent: {
      type: [Array, String],
      default: 'flex-start',
    },
    alignItems: {
      type: [Array, String],
      default: 'flex-start',
    },
    alignContent: {
      type: [Array, String],
      default: 'flex-start',
    },
  },

  computed: {
    style() {
      const valueArray = [
        'width', 'height', 'padding', 'margin', 'fontSize', 'justifyContent', 'alignItems', 'alignContent',
      ];
      return createStyle(valueArray, this);
    },
  },
};
</script>
