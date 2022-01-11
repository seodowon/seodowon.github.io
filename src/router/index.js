import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
      {path: "chqwire", component: () => import( '../views/CHQWire.vue') },
      {path: "cdbar", component: () => import( '../views/CDBar.vue') },
      {path: "peeledbar", component: () => import( '../views/PeeledBar.vue') }
    ]
  },
  {
    path: '/map',
    name: 'Map',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/Map.vue')
  },
  /*
  {
    path: '/about/chqwire',
    name: 'About',
    component: () => import( '../views/CHQWire.vue')
  },
  {
    path: '/about/cdbar',
    name: 'About',

    component: () => import( '../views/About.vue')
  },
  {
    path: '/about/peeledbar',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/About.vue')
  },
  */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
