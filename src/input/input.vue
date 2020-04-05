<template>
  <input
      v-if="type!=='textarea'"
      :style="style"
      class="anole-input"
      :disabled="disabled"
      type='text'
      :maxlength="maxlength"
      :placeholder="placeholder"
      :value="currentValue"
      @input="handleInput"
  />
  <textarea
      v-else
      :style="style"
      class="anole-input"
      :disabled="disabled"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :value="currentValue"
      @input="handleInput"
  />
</template>

<script>
import { createStyle } from '../common/api';

export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    maxlength: {
      type: Number,
    },
    currentValue: {
      type: String,
    },
    width: {
      type: [Array, String],
      default: () => ['50px', '100px', '150px'],
    },
    height: {
      type: [Array, String],
      default: '25px',
    },
    padding: {
      type: [Array, String],
      default: '4px 6px',
    },
    margin: {
      type: [Array, String],
      default: '0',
    },
    fontSize: {
      type: [Array, String],
      default: '1rem',
    },
    fontColor: {
      type: String,
      default: 'rgb(96, 98, 102)',
    },
    borderColor: {
      type: String,
      default: 'rgb(220, 223, 230)',
    },
    focusColor: {
      type: String,
      default: 'rgb(64,158,255)',
    },
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event);
    },
  },
  computed: {
    style() {
      const valueArray = ['width', 'height', 'margin', 'padding', 'fontSize'];
      const styleObj = createStyle(valueArray, this);
      return {
        ...styleObj,
        '--borderColor': this.borderColor,
        '--focusColor': this.focusColor,
        '--fontColor': this.fontColor,
      };
    },
  },
};
</script>
