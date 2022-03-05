import { logCityIsRequired, logHelp, logTokenIsRequired } from './services/logger.js';
import { saveWithLogs } from './services/storage.js';
import { getWeatherWithLogs } from './services/network.js';

import { getArgs, getArgsForStore } from './helpers/args.js';

import { ARGS_NAMES } from './constants/args.js';

export const initCli = async () => {
	const args = getArgs(process.argv);

	if (Object.keys(args).includes(ARGS_NAMES.help)) {
		logHelp();
		return;
	}

	const argsForStore = getArgsForStore(args);
	const { storage } = await saveWithLogs(argsForStore);

	if (!storage.token) {
		logTokenIsRequired();
		return;
	}

	if (!storage.city) {
		logCityIsRequired();
		return;
	}

	getWeatherWithLogs(storage);
};
