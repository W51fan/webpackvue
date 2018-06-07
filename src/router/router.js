import Vue from 'vue';
import Router from 'vue-router';
import App from '../components/App.vue';
import TreeViewDetail from '../components/TreeViewDetail.vue';
// import Page01 from '../components/page01.vue'
// import Page02 from '../components/page02.vue'
// import Page03 from '../components/page03.vue'
// import Page04 from '../components/page04.vue'
// import Page05 from '../components/page05.vue'
// import Page06 from '../components/page06.vue'
// import Page07 from '../components/page07.vue'
Vue.use(Router)
export default new Router({
  linkActiveClass: 'selected',
  routes: [{
      path: '/',
      name: 'App',
      component: TreeViewDetail
    },
    {
      path: '/detail/quickstart',
      name: 'quickstart',
      component: TreeViewDetail
    },
    {
      path: '/detail/1-1',
      name: 'gaode',
      //component: Page01
      component: (resolve) => require(['../components/page01.vue'], resolve)
    },
    {
      path: '/detail/1-2',
      name: 'baidu',
      //component: Page02
      component: (resolve) => require(['../components/page02.vue'], resolve)
    },
    {
      path: '/detail/1-3',
      name: 'google',
      //component: Page03
      component: (resolve) => require(['../components/page03.vue'], resolve)
    },
    {
      path: '/detail/1-4',
      name: 'biying',
      //component: Page04
      component: (resolve) => require(['../components/page04.vue'], resolve)
    },
    {
      path: '/detail/architecture',
      name: 'architecture',
      //component: Page05
      component: (resolve) => require(['../components/page05.vue'], resolve)
    },
    {
      path: '/detail/2-1',
      name: 'hierarchical-dependency-injection',
      //component: Page09
      component: (resolve) => require(['../components/page09.vue'], resolve)
    },
    {
      path: '/detail/2-2',
      name: 'ngmodule',
      //component: Page06
      component: (resolve) => require(['../components/page06.vue'], resolve)
    },
    {
      path: '/detail/2-3',
      name: 'ngmodule-faq',
      //component: Page07
      component: (resolve) => require(['../components/page07.vue'], resolve)
    },
    {
      path: '/detail/2-4',
      name: 'dependency-injection',
      //component: Page08
      component: (resolve) => require(['../components/page08.vue'], resolve)
    },
    {
      path: '/detail/2-5',
      name: 'dependency-injection',
      //component: Page08
      component: (resolve) => require(['../components/page10.vue'], resolve)
    },
    {
      path: '/detail/2-6',
      name: 'dependency-injection-in-action',
      //component: Page10
      component: (resolve) => require(['../components/page11.vue'], resolve)
    },
    {
      path: '/detail/3-1',
      name: 'rectangularRotation',
      component: (resolve) => require(['../components/rectangularRotation.vue'], resolve)
    },
    {
      path: '/detail/3-2',
      name: 'loadingTransition',
      component: (resolve) => require(['../components/diamondloader.vue'], resolve)
    },
    {
      path: '/detail/5-1',
      name: 'editor',
      component: (resolve) => require(['../components/editor.vue'], resolve)
    },

  ]
})