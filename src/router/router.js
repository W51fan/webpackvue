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
      path: '/detail/tutorial',
      name: 'tutorial',
      component: TreeViewDetail
    },
    {
      path: '/detail/toh-pt1',
      name: 'toh-pt1',
      component: TreeViewDetail
    },
    {
      path: '/detail/toh-pt2',
      name: 'toh-pt2',
      component: TreeViewDetail
    },
    {
      path: '/detail/architecture',
      name: 'architecture',
      //component: Page05
      component: (resolve) => require(['../components/page05.vue'], resolve)
    },
    {
      path: '/detail/displaying-data',
      name: 'displaying-data',
      component: TreeViewDetail
    },
    {
      path: '/detail/template-syntax',
      name: 'template-syntax',
      component: TreeViewDetail
    },
    {
      path: '/detail/lifecycle-hooks',
      name: 'lifecycle-hooks',
      component: TreeViewDetail
    },
    {
      path: '/detail/component-interaction',
      name: 'component-interaction',
      component: TreeViewDetail
    },
    {
      path: '/detail/component-styles',
      name: 'component-styles',
      component: TreeViewDetail
    },
    {
      path: '/detail/dynamic-component-loader',
      name: 'dynamic-component-loader',
      component: TreeViewDetail
    },
    {
      path: '/detail/attribute-directives',
      name: 'attribute-directives',
      component: TreeViewDetail
    },
    {
      path: '/detail/structural-directives',
      name: 'structural-directives',
      component: TreeViewDetail
    },
    {
      path: '/detail/pipes',
      name: 'pipes',
      component: TreeViewDetail
    },
    {
      path: '/detail/animations',
      name: 'animations',
      component: TreeViewDetail
    },
    {
      path: '/detail/user-input',
      name: 'user-input',
      component: TreeViewDetail
    },
    {
      path: '/detail/forms',
      name: 'forms',
      component: TreeViewDetail
    },
    {
      path: '/detail/form-validation',
      name: 'form-validation',
      component: TreeViewDetail
    },
    {
      path: '/detail/reactive-forms',
      name: 'reactive-forms',
      component: TreeViewDetail
    },
    {
      path: '/detail/dynamic-form',
      name: 'dynamic-form',
      component: TreeViewDetail
    },
    {
      path: '/detail/bootstrapping',
      name: 'bootstrapping',
      component: TreeViewDetail
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
      path: '/detail/http',
      name: 'http',
      component: TreeViewDetail
    },
    {
      path: '/detail/router',
      name: 'router',
      component: TreeViewDetail
    },
    {
      path: '/detail/testing',
      name: 'testing',
      component: TreeViewDetail
    },
    {
      path: '/detail/cheatsheet',
      name: 'cheatsheet',
      component: TreeViewDetail
    },
    {
      path: '/detail/i18n',
      name: 'i18n',
      component: TreeViewDetail
    },
    {
      path: '/detail/language-service',
      name: 'language-service',
      component: TreeViewDetail
    },
    {
      path: '/detail/security',
      name: 'security',
      component: TreeViewDetail
    },
    {
      path: '/detail/setup',
      name: 'setup',
      component: TreeViewDetail
    },
    {
      path: '/detail/setup-systemjs-anatomy',
      name: 'setup-systemjs-anatomy',
      component: TreeViewDetail
    },
    {
      path: '/detail/browser-support',
      name: 'browser-support',
      component: TreeViewDetail
    },
    {
      path: '/detail/npm-packages',
      name: 'npm-packages',
      component: TreeViewDetail
    },
    {
      path: '/detail/typescript-configuration',
      name: 'typescript-configuration',
      component: TreeViewDetail
    },
    {
      path: '/detail/aot-compiler',
      name: 'aot-compiler',
      component: TreeViewDetail
    },
    {
      path: '/detail/metadata',
      name: 'metadata',
      component: TreeViewDetail
    },
    {
      path: '/detail/deployment',
      name: 'deployment',
      component: TreeViewDetail
    },
    {
      path: '/detail/upgrade',
      name: 'upgrade',
      component: TreeViewDetail
    },
    {
      path: '/detail/ajs-quick-reference',
      name: 'ajs-quick-reference',
      component: TreeViewDetail
    },
    {
      path: '/detail/visual-studio-2015',
      name: 'visual-studio-2015',
      component: TreeViewDetail
    },
    {
      path: '/detail/styleguide',
      name: 'styleguide',
      component: TreeViewDetail
    },
    {
      path: '/detail/glossary',
      name: 'glossary',
      component: TreeViewDetail
    },
    {
      path: '/detail/api',
      name: 'api',
      component: TreeViewDetail
    }
  ]
})
