import Vue from 'vue'
import Router from 'vue-router'
import List from '../src/App.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            name: 'List',
            path: '/',
            component: List
        }
    ],
    mode: 'history'
})