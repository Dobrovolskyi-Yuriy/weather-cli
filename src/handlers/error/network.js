import { logError, logInvalidToken } from "../../services/logger.js";

export const logGetWether = err => {
	switch (err.cod) {
		case 401:
			logInvalidToken();
			break;
		default:
			logError(err.message);
	}
};
