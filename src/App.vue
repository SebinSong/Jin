<template lang="pug">
.c-app
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
      console.log('closeModal in App.vue')
      this.modalOn = false
    }
  },
  mounted () {
    Bus.$on(eventList.openModal, this.openModal)
    Bus.$on(eventList.closeModal, this.closeModal)

    this.$router.push({
      name: 'Unashamed'
    })
  }
}
</script>

<style lang="scss">
.c-app {
  position: relative;
  width: 100vw;
  height: 100vh;
}
</style>
