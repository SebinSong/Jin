<template lang='pug'>
.c-toolbar
  .c-toolbar-title(
    @click="toHome"
  ) Jin
  hamburger-icon
</template>

<script>
import HamburgerIcon from './hamburgerIcon.vue'

export default {
  name: 'PageToolbar',
  components: {
    HamburgerIcon
  },
  methods: {
    toHome () {
      this.$router.push({
        name: 'Home'
      })
    }
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
  padding: 0 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 3;

  @include tablet {
    padding: 0 8rem;
  }
}

.c-toolbar-title {
  font-size: 2.5rem;
  color: $text-black;
  cursor: pointer;
}
</style>