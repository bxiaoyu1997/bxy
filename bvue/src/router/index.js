import Vue from 'vue'
import Router from 'vue-router'

const admin=()=> import ('@/components/admin/admin')

const HelloWorld=()=> import ('@/components/HelloWorld')

const develop =()=> import ('@/views/develop')

Vue.use(Router)

export default new Router({
 
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/develop',
      name: 'develop',
      component: develop
    }
  ]
})
