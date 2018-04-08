import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from './app.vue'
import App from './components/App.vue'
import router from './router/router.js'
import store from './store/index'
import Axios from 'axios'

Vue.use(Axios)

Vue.config.productionTip = false

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
	store,
	router:router,
	render:(h)=>h(App)
}).$mount(root);
