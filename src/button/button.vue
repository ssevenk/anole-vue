/* eslint-disable vue/valid-template-root */
<template>
    <button
        class="anole-button"
        :style="style"
    >
      <span><slot></slot></span>
    </button>
</template>

<script>
import { getValue, createStyle } from '../common/api';

export default {
  name: 'Button',
  props: {
    padding: {
      type: [Array, String],
    },
    margin: {
      type: [Array, String],
    },
    fontSize: {
      type: [Array, String],
      default: '1rem',
    },
    size: {
      type: [Array, String],
      default: () => ['mini', 'normal', 'large'],
    },
    color: {
      type: String,
      default: 'rgb(179, 179, 179)',
    },
    hoverColor: {
      type: String,
      default: 'rgb(214, 214, 214)',
    },
  },
  data() {
    
  }

  computed: {
    style() {
      const valueArray = ['margin', 'padding', 'fontSize', 'color', 'hoverColor'];
      return createStyle(valueArray, this);
    },
  },
  created() {
    if (this.padding && this.fontSize) {
      return;
    }
    const padding = [];
    const fontSize = [];
    for (let i = 0; i <= 2; i++) {
      const sizeStyle = this.getSizeStyle(i);
      padding.push(sizeStyle.padding);
      fontSize.push(sizeStyle.fontSize);
    }
    if (!this.padding) {
      this.padding = padding;
    }
    if (!this.fontSize) {
      this.fontSize = fontSize;
    }
  },
  methods: {
    getSizeStyle(index) {
      const str = getValue(this.size, index);
      switch (str) {
        case 'mini':
          return {
            fontSize: '12px',
            padding: '6px 12px',
          };
        case 'small':
          return {
            fontSize: '13px',
            padding: '8px 14px',
          };
        case 'normal':
          return {
            fontSize: '14px',
            padding: '10px 16px',
          };
        case 'large':
          return {
            fontSize: '16px',
            padding: '14px 20px',
          };
        default:
          return {
            fontSize: '14px',
            padding: '10px 16px',
          };
      }
    },
  },
};
</script>
