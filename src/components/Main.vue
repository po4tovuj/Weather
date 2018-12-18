<template>
  <main class="main">
    <div class="row">
      <div class="col-lg-3 col-sm-4 vue-multiselect">
        <multiselect
          :allow-empty="false"
          v-model="currentCity"
          @select="updateCity"
          :options="cities"
          deselect-label
        ></multiselect>
        <multiselect
          class="mt-5"
          v-model="currentMetric"
          track-by="name"
          label="name"
          :options="metrics"
          @select="updateMetric"
          :allow-empty="false"
          deselect-label
        >
          <template slot="singleLabel" slot-scope="{option}">{{option.name}}</template>
        </multiselect>
      </div>
      <div class="col-lg-9 wrapper__city col-sm-8">
        <Loader v-if="isLoading"/>
        <City v-else/>
      </div>
    </div>
  </main>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import City from './_city_weather';
import Loader from './Loader';
export default {
	components: {
		City,
		Loader,
	},
	data() {
		return {
			currentMetric: { name: 'Celsius', units: 'metric' },
			currentCity: 'London',
			cities: ['London', 'Stockholm', 'Kyiv'],
			metrics: [
				{ name: 'Kelvin', units: '' },
				{ name: 'Celsius', units: 'metric' },
				{ name: 'Fahrenheit', units: 'imperial' },
			],
		};
	},
	methods: {
		...mapActions({
			getWeather: 'weather/getCityWeather',
		}),
		updateCity(city) {
			this.$nextTick(() =>
				this.getWeather({ name: city, metrics: this.currentMetric.units }),
			);
		},
		updateMetric(metric) {
			console.log(metric);
			this.$nextTick(() =>
				this.getWeather({ name: this.currentCity, metrics: metric.units }),
			);
		},
	},
	computed: {
		...mapGetters({
			isLoading: 'weather/getIsLoading',
		}),
	},
	mounted() {
		this.getWeather({
			name: this.currentCity,
			metrics: this.currentMetric.units,
		});
	},
};
</script>
