<template>
    <button class="anole-button" :style="style">
      <slot></slot>
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
      default: '0',
    },
    fontSize: {
      type: [Array, String],
    },
    size: {
      type: [Array, String],
      default: () => ['small', 'normal', 'large'],
    },
    backgroundColor: {
      type: String,
      default: 'rgb(210, 210, 210)',
    },
    hoverColor: {
      type: String,
      default: 'rgb(224, 224, 224)',
    },
    fontColor: {
      type: String,
      default: 'rgb(31, 47, 61)',
    },
  },
  data() {
    return {
      computedPadding: null,
      computedFontSize: null,
    };
  },

  computed: {
    style() {
      const valueArray = ['margin', 'computedPadding', 'computedFontSize'];
      const styleObj = createStyle(valueArray, this);
      return {
        ...styleObj,
        '--backgroundColor': this.backgroundColor,
        '--hoverColor': this.hoverColor,
        '--fontColor': this.fontColor,
      };
    },
  },
  created() {
    if (this.padding) {
      this.computedPadding = this.padding;
    }
    if (this.fontSize) {
      this.computedFontSize = this.fontSize;
    }
    if (this.computedPadding && this.computedFontSize) {
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
      this.computedPadding = padding;
    }
    if (!this.fontSize) {
      this.computedFontSize = fontSize;
    }
  },
  methods: {
    getSizeStyle(index) {
      const str = getValue(this.size, index);
      switch (str) {
        case 'small':
          return {
            fontSize: '12px',
            padding: '4px 10px',
          };
        case 'normal':
          return {
            fontSize: '13px',
            padding: '5px 12px',
          };
        case 'large':
          return {
            fontSize: '14px',
            padding: '6px 14px',
          };
        default:
          return {
            fontSize: '13px',
            padding: '6px 12px',
          };
      }
    },
  },
};
</script>
