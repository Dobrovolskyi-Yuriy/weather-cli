export const makeRequest = async request => {
	try {
		const { data } = await request();
		return Promise.resolve(data);
	} catch (err) {
		return Promise.reject(err.response.data);
	}
};
