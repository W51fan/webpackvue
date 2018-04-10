import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from './app.vue'
import App from './components/App.vue'
import router from './router/router.js'
import store from './store/index'
import LocalStorage from "./assets/libs/LocalStorage.js";
import Axios from 'axios'
// import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import NormailizeCss from 'normalize.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
import menus from './config/menu-config'

//Vue.use(Axios)
Vue.prototype.$http = Axios
// Vue.use(VueAxios)
Vue.use(ElementUI)
Vue.use(LocalStorage)
Vue.component('icon', Icon)

Vue.config.productionTip = false;


const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
	store,
	router:router,
	render:(h)=>h(App)
}).$mount(root);

var routes = []
menus.forEach((item) => {
	item.sub.forEach((sub) => {
	  routes.push({
		path: `/${sub.componentName}`,
		name: sub.componentName,
		component: () => import(`./components/${sub.componentName}`)
	  })
	})
  })
  
export default new VueRouter({ routes })
  
