/* eslint-disable vue/valid-template-root */
<template>
  <Base
    :width = 'computedWidth'
    :height = 'computedheight'
    :padding = 'computedPadding'
    :fontSize = 'computedFontSize'
    :margin = 'margin'
  >
    <button
        class="anole-button"
        :style="style"
    >
      <span><slot></slot></span>
    </button>
  </Base>
</template>

<script>
import Base from '../base/index.vue';

export default {
  name: 'Button',
  components: {
    Base,
  },
  props: {
    width: {
      type: [Array, String],
    },
    height: {
      type: [Array, String],
    },
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
      default: 'normal',
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

  computed: {
    style() {
      return {
        '--small-font-size': this.smallFontSize,
        '--medium-font-size': this.mediumFontSize,
        '--large-font-size': this.largeFontSize,
        '--small-padding': this.smallPadding,
        '--medium-padding': this.mediumPadding,
        '--large-padding': this.largePadding,
        '--color': this.color,
        '--hoverColor': this.hoverColor,
      };
    },
    smallFontSize() {
      if (Array.isArray(this.fontSize)) {
        return this.fontSize[0];
      }
      if (this.fontSize) {
        return this.fontSize;
      }
      const sizeStyle = this.getSizeStyle(this.size, 0);
      return sizeStyle.fontSize;
    },
    mediumFontSize() {
      if (Array.isArray(this.fontSize)) {
        return this.fontSize[1];
      }
      if (this.fontSize) {
        return this.fontSize;
      }
      const sizeStyle = this.getSizeStyle(this.size, 1);
      return sizeStyle.fontSize;
    },
    largeFontSize() {
      if (Array.isArray(this.fontSize)) {
        return this.fontSize[2];
      }
      if (this.fontSize) {
        return this.fontSize;
      }
      const sizeStyle = this.getSizeStyle(this.size, 2);
      return sizeStyle.fontSize;
    },
    smallPadding() {
      if (Array.isArray(this.padding)) {
        return this.padding[0];
      }
      if (this.fontSize) {
        return this.padding;
      }
      const sizeStyle = this.getSizeStyle(this.size, 0);
      return sizeStyle.padding;
    },
    mediumPadding() {
      if (Array.isArray(this.padding)) {
        return this.padding[1];
      }
      if (this.fontSize) {
        return this.padding;
      }
      const sizeStyle = this.getSizeStyle(this.size, 1);
      return sizeStyle.padding;
    },
    largePadding() {
      if (Array.isArray(this.padding)) {
        return this.padding[2];
      }
      if (this.fontSize) {
        return this.padding;
      }
      const sizeStyle = this.getSizeStyle(this.size, 2);
      return sizeStyle.padding;
    },
  },
  methods: {
    getSizeStyle(size, index) {
      let str;
      if (!size) {
        str = '';
      }
      if (!size[index]) {
        str = size;
      } else {
        str = size[index];
      }
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
