<template lang='pug'>
.c-timeline
  .timeline__btn
  .timeline__text.heading 2020
  .timeline__container
    timeline-item
      svg.c-hello-text(
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 525 100"
      )
        text.hello(
          x="262.5"
          y="70"
          textLength="525"
          lengthAdjust="spacingAndGlyphs"
        ) Hello Again :)
    timeline-item
      | I'm a
      strong UI Designer
      | from korea, currently based in New Zealand.
    timeline-item
      | I'm a
      strong Creative
      | person.
    timeline-item
      | I'm a great
      strong Learner.
    timeline-item
      | I love to
      strong design
      | and
      strong develop app & web.
</template>

<script>
import TimelineItem from './TimelineItem.vue'

export default {
  name: 'Timeline',
  components: {
    TimelineItem
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-timeline {
  position: absolute;
  width: 0.3rem;
  height: 133.75vh;
  border-radius: 0.3rem;
  background-color: $text-red;

  .timeline__btn {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 1.6rem;
    background-color: $text-red;
  }
  .timeline__btn::before {
    content: '';
    display: block;
    position: absolute;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 0.4rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $background-white;
  }
  .timeline__btn::after {
    content: 'start';
    display: block;
    position: relative;
    font-size: 1.35rem;
    margin-left: 2rem;
  }

  .timeline__text {
    position: absolute;
    color: $text-red;
    font-size: 6.4rem;
    font-weight: 700;
    writing-mode: vertical-lr;
    transform: rotate(-180deg) translateX(78%);
    bottom: 100.5vh;
  }

  .timeline__container {
    position: absolute;
    left: -0.8rem;
    top: 35rem;
    width: max-content;
    height: max-content;
  }
}

.c-hello-text {
  position: relative;
  width: 52.5rem;
  height: 10rem;

  .hello {
    font-size: 7rem;
    font-weight: 700;
    text-anchor: middle;
    fill: none;
    letter-spacing: 0.5rem;
    stroke: rgba($text-black, 0.9) {
      width: 1px;
    }
  }
}
</style>