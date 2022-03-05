import axios from "axios";

import { makeRequest } from "../helpers/network.js";

import handlerWithLogs from '../decorators/handlerWithLogs.js';

import { logGetWether as failureLogGetWether } from "../handlers/error/network.js";
import { logGetWeather as successLogGetWeather } from "../handlers/success/network.js";

const SOURCE = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = ({ city, token }) => makeRequest(() => axios.get(SOURCE, {
	params: {
		q: city,
		appid: token,
		units: 'metric'
	}
}));

export const getWeatherWithLogs = handlerWithLogs(getWeather, {
	successHandler: successLogGetWeather, errorHandler: failureLogGetWether
});