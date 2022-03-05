import chalk from 'chalk';
import dedent from 'dedent-js';

const { red, green, yellow, magenta } = chalk;

const HELP_MESSAGE = `
	Without arguments - weather output
	-c [CITY] set city
	-t [API_KEY] set token
	-h Help
`;

const getWeatherIcon = (icon) => {
	switch (icon.slice(0, -1)) {
		case '01':
			return '☀️';
		case '02':
			return '🌤️';
		case '03':
			return '☁️';
		case '04':
			return '☁️';
		case '09':
			return '🌧️';
		case '10':
			return '🌦️';
		case '11':
			return '🌩️';
		case '13':
			return '❄️';
		case '50':
			return '🌫️';
	}
};

export const logError = error => console.log(`${red('ERROR')} ${error}`);

export const logSuccess = success => console.log(`${green('SUCCESS')} ${success}`);

export const logHelp = () => console.log(dedent(`${yellow('HELP')} ${HELP_MESSAGE}`));

export const logWeather = ({ city, icon, description, temp, feels_like, humidity, windSpeed }) => console.log(dedent(`
	${magenta('WEATHER')}
	${city} - ${getWeatherIcon(icon)}  ${description}
	Temperature: ${temp}\xB0C (feels like ${feels_like}\xB0C)
	Humidity: ${humidity}%
	Wind speed: ${windSpeed} meter/sec
`));

export const logDataSaved = () => logSuccess('Data was saved');

export const logTokenIsRequired = () => logError('You have no token. Use command -t [API_KEY] for set token');

export const logCityIsRequired = () => logError('You have no city. Use command -c [CITY] for set city');

export const logInvalidToken = () => logError('Invalid token');
