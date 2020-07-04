<template lang='pug'>
.c-text-cloud
  svg.c-svg(
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 150 70"
  )
    path.c-cloud(
      d="M 0,0 h150 v55 h-68 l-7,15 -7,-15 h-68 z"
    )
    text.c-welcome-text(
      x="75" y="35"
    ) Welcome!
</template>

<script>
export default {
  name: 'TextCloud'
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-text-cloud {
  position: absolute;
  width: 15rem;
  height: 7rem;

}

.c-svg {
  position: relative;
  width: 100%;
  height: 100%;
}

.c-cloud {
  fill: $text-black;
  stroke: none;
}

.c-welcome-text {
  font-size: 2.2rem;
  letter-spacing: 1.25px;
  text-anchor: middle;
  fill: $background-white;
}
</style>