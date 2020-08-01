<template lang='pug'>
.c-prev-next(
  :class="{ 'has-both': prevData && nextData }"
)
  .c-prev(
    v-if="prevData"
    @click="navigateTo(prevData)"
  )
    span.c-top-text Previous project
    h3.c-title {{ prevData.title }}
    img.c-image(:src='imgPaths[prevData.number]')
    arrow

  .c-next(
    v-if="nextData"
    @click="navigateTo(nextData)"
  )
    span.c-top-text Next project
    h3.c-title {{ nextData.title }}
    img.c-image(:src='imgPaths[nextData.number]')
    arrow(:toRight='true')
</template>

<script>
import { pageData } from '@utils/resources.js'
import {
  Bus,
  eventList
} from '@controller/eventBus.js'
import Arrow from '@components/Arrow.vue'

export default {
  name: 'PrevNext',
  components: {
    Arrow
  },
  data () {
    return {
      prevData: null,
      nextData: null
    }
  },
  props: {
    currentPageNumber: {
      type: Number,
      required: true
    }
  },
  computed: {
    imgPaths () {
      return {
        '01': require('@/assets/images/main/01.jpg'),
        '02': require('@/assets/images/main/02.jpg'),
        '03': require('@/assets/images/main/03.jpg'),
        '04': require('@/assets/images/main/04.jpg'),
        '05': require('@/assets/images/main/05.jpg'),
      }
    }
  },
  methods: {
    initData () {
      if (this.currentPageNumber > 1)
        this.prevData = pageData[`0${this.currentPageNumber - 1}`]
      if (this.currentPageNumber < 5)
        this.nextData = pageData[`0${this.currentPageNumber + 1}`]
    },
    navigateTo (data) {
      this.$router.push({
        name: data.routeName
      })
      console.log('event name: ', eventList.toScrollTop)
      Bus.$emit(eventList.toScrollTop)
    }
  },
  created () {
    this.initData()
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/styles/_variables.scss";

.c-prev-next {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &.has-both {
    justify-content: center;
  }
}

.c-prev,
.c-next {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 40rem;
  min-height: 35rem;
  height: auto;
  align-items: center;
  overflow: hidden;
  padding: 1.5rem;
  cursor: pointer;

  .c-top-text {
    display: block;
    margin-bottom: 8rem;
    font: {
      size: $size-body-lg;
      weight: 700;
    }
  }

  .c-title {
    position: absolute;
    top: 30%;
    left: 50%;
    width: max-content;
    transform: translate(-50%, -50%);
    font-size: 7rem;
  }

  .c-image {
    display: block;
    width: 27rem;
    height: 18rem;
    margin-bottom: 3.5rem;
  }
}
</style>