<template>
  <div id="app">
    <Header/>
    <Main/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import { mapActions } from 'vuex';
export default {
	name: 'app',
	components: {
		Header,
		Main,
	},
	methods: {
		...mapActions({
			getWeather: 'weather/getCityWeather',
		}),
	},
};
</script>
