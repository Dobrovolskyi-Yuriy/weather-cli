import { logWeather } from "../../services/logger.js";

export const logGetWeather = ({ name, weather, main, wind }) => logWeather({
	city: name,
	icon: weather[0].icon,
	description: weather[0].description,
	temp: Math.round(main.temp),
	feels_like: Math.round(main.feels_like),
	humidity: main.humidity,
	windSpeed: wind.speed,
});