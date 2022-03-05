import { logError } from "../services/logger.js";

export default (func, options = {}) => async (data = {}) => {
	try {
		const res = await func(data);
		if (options.successHandler) {
			options.successHandler(res);
		}
		return res;
	} catch (err) {
		if (options.errorHandler) {
			options.errorHandler(err);
		} else {
			logError(err);
		}
	};
};