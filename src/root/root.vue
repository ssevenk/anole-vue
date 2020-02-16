<template>
  <div>
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
  
  created(){
    const fontSize = this.fontSize
    const rootFontSizeS = fontSize[0] || '12px'
    const rootFontSizeM = fontSize[1] || '14px'
    const rootFontSizeL = fontSize[2] || '16px'
    document.documentElement.style.setProperty('--rootFontSizeS',rootFontSizeS)
    document.documentElement.style.setProperty('--rootFontSizeM',rootFontSizeM)
    document.documentElement.style.setProperty('--rootFontSizeL',rootFontSizeL)
  }
};
</script>
