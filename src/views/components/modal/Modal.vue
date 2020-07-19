<template lang='pug'>
.c-modal
  modal-item(
    v-for='item in modalItemList'
    :key='item.id'
    :itemInfo='item'
    @click='navigateTo(item.routeName)'
  )

  close-button.c-close-button(
    @click='closeModal'
  )
</template>

<script>
import { modalItemList } from '@utils/resources.js'
import CloseButton from '@components/CloseButton.vue'
import ModalItem from './ModalItem.vue'
import {
  Bus,
  eventList
} from '@controller/eventBus.js'

export default {
  name: 'Modal',
  data () {
    return {
      modalItemList
    }
  },
  components: {
    ModalItem,
    CloseButton
  },
  methods: {
    closeModal () {
      Bus.$emit(eventList.closeModal)
    },
    navigateTo (routeName) {
      this.$router.push({
        name: routeName
      })
      this.closeModal()
      Bus.$emit(eventList.toScrollTop)
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/_variables.scss";

.c-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
  z-index: $zIndex-modal;
  background-color: $background-white;
}

.c-close-button {
  position: absolute;
  z-index: 1;
  left: 3rem;
  top: 3rem;
}
</style>