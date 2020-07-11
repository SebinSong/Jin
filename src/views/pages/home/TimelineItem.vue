<template lang='pug'>
.c-timeline-item
  .btn-container
    .btn
    .dash-line
  .item-content
    slot
</template>

<script>
export default {
  name: 'TimelineItem'
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-timeline-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  &:not(:last-child) {
    margin-bottom: 5.5rem;
  }
}

.btn-container {
  position: relative;
  margin-right: 2.5rem;
  display: flex;
  align-items: center;

  .btn {
    position: relative;
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 1.6rem;
    background-color: $text-red;
  }
  .btn::before {
    content: '';
    position: absolute;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 0.4rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $background-white;
  }

  .dash-line {
    position: relative;
    width: 5rem;
    height: 1px;
    border-bottom: 2px dashed $text-red;
  }
}

.item-content {
  font-size: $size-body-lg;
  color: rgba($text-black, 0.9);

  > strong {
    display: inline-block;
    margin: 0 0.75rem;
    color: $text-black;
  }
}
</style>