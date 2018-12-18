<template>
  <div class="city">
    <h3 class="city__name">{{city.name}}</h3>
    <div class="city-info">
      <p>
        Today is:
        <strong>{{city.date | parseFullDate}}</strong>
      </p>
    </div>
    <div class="city-info">
      <p>
        Now in {{city.name}}:
        <strong>{{city.weather}}</strong>
      </p>
    </div>

    <div class="city-info">
      <p>
        Temperature is:
        <strong>{{city.temp}}</strong>
      </p>
    </div>
    <div class="city-info">
      <p>
        The pressure is:
        <strong>{{city.pressure}}</strong>
      </p>
    </div>
    <div class="city-info">
      <p>
        The Humidity:
        <strong>{{city.humidity }}</strong>
      </p>
    </div>
    <div class="city-info">
      <p>
        Wind speed is:
        <strong>{{city.wind}}</strong>
      </p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters({
			city: 'weather/getCurrentCity',
		}),
	},
};
</script>
