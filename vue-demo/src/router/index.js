import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Forum from '@/components/Forum'
import Nav from '@/components/Nav'
// import City from '@/components/City'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/index',
      name: 'Index',
      component: Index
    },{
      path: '/forum',
      name: 'Forum',
      component: Forum
    },{
      path: '/nav',
      name: 'Nav',
      component: Nav
    },{
      path: '*',
      redirect: "/index"
    }
    // {
    //   path: "/city",
    //   name: "City",
    //   component: City
    // }
  ]
})
