import Vue from 'vue';
import App from './App.vue';
import store from './store/index';
import BootstrapVue from 'bootstrap-vue';
import Multiselect from 'vue-multiselect';

import 'bootstrap-vue/dist/bootstrap-vue.css';
import './sass/app.scss';

Vue.use(BootstrapVue);
Vue.component('multiselect', Multiselect);

Vue.config.productionTip = false;

Vue.filter('parseFullDate', data => {
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	return new Intl.DateTimeFormat('en-US', options).format(data);
});

new Vue({
	store,
	render: h => h(App),
}).$mount('#app');
