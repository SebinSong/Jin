<template lang='pug'>
.section-indicator
  .section-indicator__box
  .section-indicator__row(
    v-for="(sectionName, index) in sectionList"
    :key="sectionName"
    :class="{ 'active': index === activeSection }"
  )
    span.line
    span.text {{ sectionName }}
</template>

<script>
export default {
  name: 'SectionIndicator',
  data () {
    return {
      sectionList: [
        'About',
        'Work',
        'Contact'
      ]
    }
  },
  props: {
    activeSection: {
      type: Number
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/_variables.scss";

.section-indicator {
  position: relative;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  > *:not(:last-child) {
    margin-bottom: 3rem;
  }

  &__box {
    width: 1.2rem;
    height: 1.2rem;
    background-color: $text-black;
  }
}

.section-indicator__row {
  display: flex;
  align-items: flex-end;

  > * {
    display: inline-block;
  }

  .line {
    width: 2rem;
    height: 0.2rem;
    border-radius: 0.2rem;
    margin-right: 1rem;
    background-color: $text-black;
  }

  .text {
    font-size: $size-body-xs;
    font-weight: bold;
    letter-spacing: 0.5px;
    color: $text-black;
    margin-bottom: -0.2rem;
    user-select: none;
    opacity: 0;
  }

  &.active {
    > .line { width: 2.8rem; }
    > .text { opacity: 1; }
  }
}
</style>