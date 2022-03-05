import { logDataSaved } from "../../services/logger.js";

import { isEmpty } from "../../helpers/objects.js";

export const logSave = ({ updateRequest }) => !isEmpty(updateRequest) && logDataSaved();
