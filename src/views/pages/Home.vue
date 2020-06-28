<template lang='pug'>
.c-home
  background-animation

  .c-section
    hamburger-icon.c-menuicon
    section-indicator.c-section-indicator
  .c-section hey
</template>

<script>
import BackgroundAnimation from '@components/home-bg-animation/HomeBgAnimation.vue'
import HamburgerIcon from '@components/hamburgerIcon.vue'
import SectionIndicator from '@components/sectionIndicator.vue'

export default {
  name: 'Home',
  components: {
    BackgroundAnimation,
    HamburgerIcon,
    SectionIndicator
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/_variables.scss";

.c-home {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
}

.c-section {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.c-menuicon {
  position: absolute;
  top: 50px;
  left: 90px;
}

.c-section-indicator {
  position: absolute;
  left: 90px;
  bottom: 200px;
}
</style>