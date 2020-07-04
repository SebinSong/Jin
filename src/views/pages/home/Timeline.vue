<template lang='pug'>
.c-timeline
  .timeline__btn
  .timeline__text 2020
</template>

<script>
export default {
  name: 'Timeline'
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-timeline {
  position: absolute;
  width: 0.3rem;
  height: 94rem;
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

  .timeline__text {
    position: absolute;
    color: $text-red;
    font-size: 6.4rem;
    font-weight: 700;
    writing-mode: vertical-lr;
    transform: rotate(180deg) translate(78%, -20%);
  }
}
</style>