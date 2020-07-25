<template lang="pug">
.c-app(
  ref='app'
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
      modalOn: false
    }
  },
  methods: {
    openModal () {
      this.modalOn = true
    },
    closeModal () {
      this.modalOn = false
    },
    toScrollTop () {
      this.$refs.app.scrollTop = 0
    },
    scrollTo ({ yFraction }) {
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
  mounted () {
    Bus.$on(eventList.openModal, this.openModal)
    Bus.$on(eventList.closeModal, this.closeModal)
    Bus.$on(eventList.toScrollTop, this.toScrollTop)
    Bus.$on(eventList.scrollBarMove, this.scrollTo)
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
  overflow-y: hidden;
  overflow-x: hidden;
}
</style>
