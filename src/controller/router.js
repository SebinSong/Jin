import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@pages/home/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: '/app',
  routes: [
    {
      path: '/',
      component: Home,
      name: Home.name,
      meta: { title: 'Home' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title)
    document.title = to.meta.title
  
  next()
})

export default router
