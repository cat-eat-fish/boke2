import Vue from 'vue'
import Router from 'vue-router'
import MyMain from '@/views/mymain'
import Warehouse from '@/views/warehouse'
import Collection from '@/views/collection'
import Beekeepers from '@/views/beekeepers'
import Integration from '@/views/integration'

Vue.use(Router)

export default new Router({
    mode:'history',
    // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'mymain',
      component: MyMain
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/integration',
      name: 'integration',
      component: Integration
    },
    {
      path: '/warehouse',
      name: 'warehouse',
      component: Warehouse 
    },
    {
      path: '/collection',
      name: 'collection',
      component: Collection
    },
    {
      path: '/beekeepers',
      name: 'beekeepers',
      component: Beekeepers
    },
  ]
})

