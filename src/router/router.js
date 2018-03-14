import Vue from 'vue'
import VueRouter from 'vue-router'
import Page01 from '../components/page01.vue'
import Page02 from '../components/page02.vue'
import Page03 from '../components/page03.vue'
import Page04 from '../components/page04.vue'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            // +++++++++++++++++++++ 首页
            path: '/',
            redirect: '/Page01'
        },
        {

            path: '/Page01',
            component: Page01
        },
        {

            path: '/Page02',
            component: Page02
        },
        {

            path: '/Page03',
            component: Page03
        },
        {

            path: '/Page04',
            component: Page04
        }
    ]
})
