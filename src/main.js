import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppPosts from './components/AppPosts'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: `/`, redirect: `/posts` },
  { path: `/posts`, component: AppPosts },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
