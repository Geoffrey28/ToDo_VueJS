import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import All from './components/All.vue'
import Do from './components/Do.vue'
import Todo from './components/Todo.vue'

const routes = [
    { path: '/', component: All },
    { path: '/Do', component: Do },
    { path: '/Todo', component: Todo }
]

const router = new VueRouter({
    routes
})

export { router }