import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

import handlerWithLogs from '../decorators/handlerWithLogs.js';

import { logSave } from '../handlers/success/storage.js';

export const STORAGE_PATH = join(homedir(), 'weather-cli-data.json');

const isExist = async path => {
	try {
		await promises.stat(path);
		return true;
	} catch {
		return false;
	}
};

export const getStorage = async () => JSON.parse(
	(await promises.readFile(STORAGE_PATH)).toString()
);

export const save = async (data) => {
	let newData = { ...data };

	if (await isExist(STORAGE_PATH)) {
		const oldData = await getStorage();
		newData = { ...oldData, ...newData };
	}
	
	await promises.writeFile(STORAGE_PATH, JSON.stringify(newData));

	return { storage: newData, updateRequest: data };
};

export const saveWithLogs = handlerWithLogs(save, { successHandler: logSave });
