<template lang="pug">
.c-app(ref='app')
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
    }
  },
  created () {
    this.$router.push({
      name: 'First'
    })
  },
  mounted () {
    Bus.$on(eventList.openModal, this.openModal)
    Bus.$on(eventList.closeModal, this.closeModal)
    Bus.$on(eventList.toScrollTop, this.toScrollTop)
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
}
</style>
