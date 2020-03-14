<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { getValue } from '../common/api';

export default {
  name: 'Root',

  props: {
    fontSize: {
      type: [Array, String],
      default: () => ['12px', '13px', '14px'],
    },
  },

  created() {
    const { fontSize } = this;
    const keyArray = ['--root-small-fontSize', '--root-medium-fontSize', '--root-large-fontSize'];
    keyArray.forEach((item, index) => {
      document.documentElement.style.setProperty(item, getValue(fontSize, index));
    });
  },
};
</script>
