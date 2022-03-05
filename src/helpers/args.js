import { ARGS_FOR_SORAGE, STORAGE_ARGS_NAMES } from "../constants/args.js";

const isArg = (value = '') => value[0] === '-';

export const getArgs = ([executor, file, ...rest]) => rest.reduce((prev, curr, i, arr) => {
	const nextValue = arr[i + 1];

	if (isArg(curr) && !isArg(nextValue)) {
		return { ...prev, [curr.slice(1)]: nextValue || true };
	}

	return prev;
}, {});

export const getArgsForStore = args => Object.keys(args)
	.filter(key => ARGS_FOR_SORAGE.includes(key))
	.reduce((prev, curr) => ({ ...prev, [STORAGE_ARGS_NAMES[curr]]: args[curr] }), {});
