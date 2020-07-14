<template lang='pug'>
.c-toolbar
  .c-toolbar-title Jin
  hamburger-icon
</template>

<script>
import HamburgerIcon from './hamburgerIcon.vue'

export default {
  name: 'PageToolbar',
  components: {
    HamburgerIcon
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/_variables.scss";

.c-toolbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: $page-toolbar-height;
  padding-left: $page-side-padding; 
  padding-right: $page-side-padding;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
}

.c-toolbar-title {
  font-size: 2.5rem;
  color: $text-black;
}
</style>