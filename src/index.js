import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import router from './router/router.js'


const root = document.createElement('div');
document.body.appendChild(root);


new Vue({
	router:router,
	render:(h)=>h(App)
}).$mount(root);
