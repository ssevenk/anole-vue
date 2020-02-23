<template>
  <button
    class="anole anole-button">
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "Button",

  props: {
    size: {
      type: Array || String
    },
    fontSize: {
      type: Array || String
    },
    padding: {
      type: Array || String
    },
    color:{
      type:String,
      default:'rgb(179, 179, 179)'
    },
    hoverColor:{
      type:String,
      default:'rgb(214, 214, 214)'
    }
  },

  computed: {
    style() {
      return {
        "--small-font-size": this.smallFontSize,
        "--medium-font-size": this.mediumFontSize,
        "--large-font-size": this.largeFontSize,
        "--small-padding": this.smallPadding,
        "--medium-padding": this.mediumPadding,
        "--large-padding": this.largePadding,
        "--color": this.color,
        "--activeColFor": this.hoverColor
      };
    },
    smallFontSize() {
      const sizeStyle = this.getSizeStyle(this.size[0] || this.size || '')
      return this.fontSize[0] || this.fontSize || sizeStyle.fontSize
    },
    mediumFontSize() {
      const sizeStyle = this.getSizeStyle(this.size[1] || this.size || '')
      return this.fontSize[1] || this.fontSize || sizeStyle.fontSize
    },
    largeFontSize() {
      const sizeStyle = this.getSizeStyle(this.size[2] || this.size || '')
      return this.fontSize[2] || this.fontSize || sizeStyle.fontSize
    },
    smallPadding() {
      const sizeStyle = this.getSizeStyle(this.size[2] || this.size || '')
      return this.padding[0] || this.padding || sizeStyle.fontSize
    },
    mediumPadding() {
      const sizeStyle = this.getSizeStyle(this.size[1] || this.size || '')
      return this.padding[1] || this.padding|| sizeStyle.padding
    },
    largePadding() {
      const sizeStyle = this.getSizeStyle(this.size[2] || this.size || '')
      return this.padding[2] || this.padding || sizeStyle.padding
    },
  },
  getSizeStyle(size) {
      switch(size){
        case 'mini':
          return {
            fontSize:'12px',
            padding:'6px 12px'
          }
        case 'small':
          return {
            fontSize:'13px',
            padding:'8px 14px'
          }
        case 'normal':
          return {
            fontSize:'14px',
            padding:'10px 16px'
          }
        case 'large':
          return {
            fontSize:'16px',
            padding:'14px 20px'
          }
        default:
          return {
            fontSize:'14px',
            padding:'10px 16px'
          }
      }
  }
};
</script>
