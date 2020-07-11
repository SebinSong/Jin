<template lang="pug">
.c-home-main-title
  .c-text-container 
    h3.text.heading My Portfolio.

  span.c-dot--inner(
    v-for="corner in corners"
    :key="`dot-inner-${corner}`"
    :class="corner"
  )

  span.c-dot--border(
    v-for="corner in corners"
    :key="`dot-border-${corner}`"
    :class="corner"
  )

  span.c-pointer
    span.c-pointer--triangle
    span.c-pointer--bar
</template>

<script>
export default {
  name: 'HomeMainTitle',
  data () {
    return {
      corners: [ 
        'topleft',
        'topright',
        'bottomleft',
        'bottomright'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/_variables.scss";

.c-home-main-title {
  position: absolute;
  border: 1px solid $text-black;
  color: $text-black;
  padding: 2rem;
  width: max-content;
  height: max-content;

  .c-text-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    letter-spacing: 0.5rem;

    .text {
      font: {
        size: 12rem;
        weight: 700;
      }
    }
  }
}

.c-dot--border {
  position: absolute;
  display: block;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 1.2rem;
  border: 1px solid $text-black;
  background-color: $background-white;

  &.topleft {
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
  }
  &.topright {
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }
  &.bottomleft {
    bottom: 0;
    left: 0;
    transform: translate(-50%, 50%);
  }
  &.bottomright {
    bottom: 0;
    right: 0;
    transform: translate(50%, 50%);
  }
}

.c-dot--inner {
  position: absolute;
  display: block;
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  border: 1px solid $text-black;
  background-color: $background-white;

  &::before {
    @include absoluteCenter;

    content: '';
    display: block;
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 0.2rem;
    background-color: $text-black;
    z-index: 1;
  }

  &.topleft {
    top: 0;
    left: 0;
    transform: translate(100%, 100%);
  }
  &.topright {
    top: 0;
    right: 0;
    transform: translate(-100%, 100%);
  }
  &.bottomleft {
    bottom: 0;
    left: 0;
    transform: translate(100%, -100%);
  }
  &.bottomright {
    bottom: 0;
    right: 0;
    transform: translate(-100%, -100%);
  }
}

.c-pointer {
  position: absolute;
  bottom: 0%;
  right: 0%;
  width: 1.4rem;
  height: 1.4rem;
  transform-origin: 50% 50%;
  transform: translate(80%, 80%) rotate(-45deg);

  > * {
    position: absolute;
  }

  &--triangle {
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    border-top: 0px solid rgba(0,0,0,0);
    border-left: 0.7rem solid rgba(0,0,0,0);
    border-right: 0.7rem solid rgba(0,0,0,0);
    border-bottom: 1.4rem solid $text-black;
  }

  &--bar {
    top: 100%;
    left: 55%;
    width: 0.3rem;
    height: 1rem;
    border-radius: 0.2rem;
    background-color: $text-black;
    transform: translateX(-50%);
  }
}
</style>