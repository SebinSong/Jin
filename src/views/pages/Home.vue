<template lang='pug'>
.c-home
  background-animation
</template>

<script>
import BackgroundAnimation from '../components/home-bg-animation/HomeBgAnimation.vue'

export default {
  name: 'Home',
  components: {
    BackgroundAnimation
  }
}
</script>

<style lang='scss' scoped>
.c-home {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: scroll;
}

.c-para {
  font-size: 5rem;
  font-weight: bold;
}
</style>