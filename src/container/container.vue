<template>
  <div :style="style" class="anole-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Room",

  props: {
    width: {
      type: Array
    },
    height: {
      type: Array
    }
  },

  computed: {
    style() {
      const sw = this.width[0] || '100%'
      const mw = this.width[1] || '100%'
      const lw = this.width[2] || '100%'
      const sh = this.height[0] || '100%'
      const mh = this.height[1] || '100%'
      const lh = this.height[2] || '100%'
      return {
        "--sw": sw,
        "--mw": mw,
        "--lw": lw,
        "--sh": sh,
        "--mh": mh,
        "--lh": lh
      };
    }
  }
};
</script>
