import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppPosts from './components/AppPosts'
import SinglePost from './components/SinglePost'
import AddPost from './components/AddPost'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: `/`, redirect: `/posts` },
  { path: `/posts`, component: AppPosts },
  { path: `/post/:id`, component: SinglePost },
  { path: `/add`, component: AddPost }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
