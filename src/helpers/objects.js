export const removeUndefinedFields = obj => Object.keys(obj).forEach(key => obj[key] === undefined && delete obj[key]);

export const isEmpty = obj => !Object.keys(obj).length;
