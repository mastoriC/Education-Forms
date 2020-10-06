import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from './dashboard/Dashboard.vue'
import Form from './form/Form.vue'

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [
        {path: "/dashboard", name: "dashboard", component: Dashboard},
        {path: "/form", name: "form", component: Form},
        {path: "*", redirect: "/dashboard"}
    ]
})