<template>
  <div :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Root",

  props: {
    fontSize: {
      type: Array
    },
  },

  computed: {
    style() {
      const [fontSize1,fontSize2,fontSize3] = this.fontSize
      return {
        "--fontSize1": fontSize1,
        "--fontSize2": fontSize2,
        "--fontSize3": fontSize3,
      };
    }
  }
};
</script>

<style lang="scss">
  html {
    @media screen and(max-width:700px){
      font-size:var(--fontSize1)
    }
    @media screen and(min-width:701px) and (max-width: 800px){
      font-size:var(--fontSize2)
    }
    @media screen and(min-width: 801px){
      font-size:var(--fontSize3)
    }
  }
</style>
