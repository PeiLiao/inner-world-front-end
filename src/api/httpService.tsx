export async function postJson(
	url: string,
	json: {},
	params?: {}
): Promise<{}> {
	const init: RequestInit = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(json),
		credentials: 'same-origin'
	};
	Object.assign(init, params);
	const response = await fetchInterceptor(url, init);
	return response;
}

async function fetchInterceptor(url: string, params: Object = {}) {
	const response = await fetch(url, params);
	return response;
}
