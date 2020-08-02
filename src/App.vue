<template lang="pug">
.c-app(
  ref='app'
  :class="{ 'with-no-scrollbar': noScrollbar }"
  :style="styleClasses"
  @scroll='onScroll'
)
  router-view
  modal(v-if='modalOn')
</template>

<script>
import Modal from '@components/modal/Modal.vue'
import {
  Bus,
  eventList
} from '@controller/eventBus.js'

export default {
  name: 'App',
  components: {
    Modal
  },
  data () {
    return {
      modalOn: false,
      noScrollbar: false,
      scrollbarWidth: 0
    }
  },
  computed: {
    styleClasses () {
      return this.noScrollbar ? {
        'right': `${-this.scrollbarWidth}px`
      } : {}
    }
  },
  methods: {
    openModal () {
      this.modalOn = true
    },
    closeModal () {
      this.modalOn = false
    },
    inspectRoute () {
      if (this.$route.name === 'Home')
        this.noScrollbar = false
      else if (!this.noScrollbar)
        this.noScrollbar = true
    },
    measureBrowserScrollbarWidth () {
      const el = document.createElement('div')
      el.classList.add('c-scrollbar-measure')
      this.$refs.app.appendChild(el)

      this.scrollbarWidth = el.offsetWidth - el.clientWidth
      this.$refs.app.removeChild(el)
    },
    toScrollTop () {
      this.$refs.app.scrollTop = 0
    },
    scrollTo ({ yFraction }) {
      if (!this.$refs.app)
        return

      const toY = (this.$refs.app.scrollHeight - window.innerHeight) * yFraction

      this.$refs.app.scrollTop = toY
    },
    onScroll () {
      if (!this.$refs.app)
        return

      const { scrollTop, scrollHeight } = this.$refs.app
      const yFraction = scrollTop / (scrollHeight - window.innerHeight)

      Bus.$emit(eventList.appOnScroll, { yFraction })
    }
  },
  watch: {
    $route: function () {
      this.inspectRoute()
    }
  },
  mounted () {
    Bus.$on(eventList.openModal, this.openModal)
    Bus.$on(eventList.closeModal, this.closeModal)
    Bus.$on(eventList.toScrollTop, this.toScrollTop)
    Bus.$on(eventList.scrollBarMove, this.scrollTo)

    this.measureBrowserScrollbarWidth()
    this.inspectRoute()
  },
  beforeDestroy () {
    Bus.$off(eventList.openModal, this.openModal)
    Bus.$off(eventList.closeModal, this.closeModal)
    Bus.$off(eventList.toScrollTop, this.toScrollTop)
  }
}
</script>

<style lang="scss">

.c-app {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  &.with-no-scrollbar {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: unset;
    height: unset;
  }
}

.c-scrollbar-measure {
  position: fixed;
  overflow: scroll;
  width: 10rem;
  height: 10rem;
  top: -300rem;
  left: -300rem;
}
</style>
