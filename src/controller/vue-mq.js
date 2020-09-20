import Vue from 'vue'
import VueMq from 'vue-mq'

const config = {
  breakpoints: {
    'small': 320,
    'phone': 768,
    'tablet': 1200,
    'desktop': Infinity
  },
  defaultBreakpoint: 'sm'
}

Vue.use(VueMq, config)