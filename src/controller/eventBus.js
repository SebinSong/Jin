import Vue from 'vue'

export const Bus = new Vue()

export const eventList = {
  openModal: 'open-modal',
  closeModal: 'close-modal'
}