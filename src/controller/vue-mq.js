import Vue from 'vue'
import VueMq from 'vue-mq'

const config = {
  breakpoints: {
    'small': 320 + 1,
    'phone': 440 + 1,
    'phoneblet': 768 + 1,
    'tablet': 1000 + 1,
    'tabletop': 1200 + 1,
    'desktop': 1600 + 1,
    'largescreen': Infinity
  },
  defaultBreakpoint: 'sm'
}

Vue.use(VueMq, config)