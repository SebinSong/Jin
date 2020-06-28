import Vue from 'vue'
import VueMq from 'vue-mq'

const config = {
  breakpoints: {
    'sm': 300,
    'md': 768,
    'lg': 1000,
    'xl': Infinity
  },
  defaultBreakpoint: 'sm'
}

Vue.use(VueMq, config)