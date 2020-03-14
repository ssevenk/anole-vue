/* eslint-disable vue/valid-template-root */
<template>
  <Base
    :width='width'
    :height='height'
    :margin='margin'
    :padding='padding'
    :fontSize='fontSize'
  >
    <div
        class="anole-container"
        :style="style"
    >
      <slot></slot>
    </div>
  </Base>
</template>

<script>
import Base from '../common/base.vue';
import { createStyle } from '../common/api';

export default {
  name: 'Room',
  components: {
    Base,
  },
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
      default: 'start',
    },
    alignItems: {
      type: [Array, String],
      default: 'start',
    },
    aligenContent: {
      type: [Array, String],
      default: 'start',
    },
  },

  computed: {
    style() {
      const valueArray = ['justifyContent', 'alignItems', 'aligenContent'];
      return createStyle(valueArray, this);
    },
  },
};
</script>
