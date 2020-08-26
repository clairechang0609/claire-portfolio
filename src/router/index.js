import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/work/:id',
        name: 'work',
        component: () => import('../views/Work.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      const position = {}
      position.x = 0
      position.y = 0
    } else {
      const position = {}
      if (to.hash) {
        position.selector = to.hash
        if (document.querySelector(to.hash)) {
          return position
        }
        return false
      }
      return new Promise(resolve => {
        if (to.matched.some(m => m.meta.scrollToTop)) {
          position.x = 0
          position.y = 0
        }
      })
    }
  }
})

export default router
