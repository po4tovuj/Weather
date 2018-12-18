import Vue from 'vue';
import Vuex from 'vuex';
import weather from './modules/weather';

Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		// = data
		activePage: '',
	},
	modules: {
		weather,
	},
	mutations: {},
});
export default store;
