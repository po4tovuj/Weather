import axios from 'axios';

const state = {
	currentCity: {},
	cities: [{ name: 'London' }, { name: 'Stockholm' }, { name: 'Kiev' }],
	key: '&appid=ab612ebf5375d77352246f16e80ad5c7',
	baseUrl: 'http://api.openweathermap.org/data/2.5/weather?q=',
	isLoading: false,
};
const getters = {
	getAllCities: () => state.cities,
	getIsLoading: () => state.isLoading,
	getCurrentCity: () => state.currentCity,
};
const actions = {
	getCityWeather: ({ commit }, city) => {
		const { baseUrl, key } = state;
		commit('loadingWeather');
		axios
			.get(`${baseUrl}${city.name}${key}&units=${city.metrics}`)
			.then(response => {
				if (response.status === 200) {
					const newCity = {
						name: response.data.name,
						weather: response.data.weather[0].main,
						weather_description: response.data.weather[0].description,
						wind: response.data.wind.speed,
						temp: response.data.main.temp,
						pressure: response.data.main.pressure,
						humidity: response.data.main.humidity,
						date: new Date(),
					};
					commit('setCurrentCity', newCity);
				} else {
					throw new Error();
				}
			})
			.then(() =>
				setTimeout(() => {
					commit('loadingWeather');
				}, 1000),
			)
			.catch(err => console.log('errorText: ', err.message));
	},
};
const mutations = {
	setCurrentCity(state, name) {
		state.currentCity = name;
	},
	loadingWeather(state) {
		state.isLoading = !state.isLoading;
	},
};
export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
