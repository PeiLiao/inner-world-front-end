import { map } from 'lodash';
import { SERVICE_URL } from '../../constants/url';

interface Message {
	name?: string;
	message?: string;
	stack?: string;
	[key: string]: any;
}

class Exception {
	message: Message | string;
	constructor(message: Message | string) {
		this.message = message;
	}
}

async function handleException(response: Response, config?: any, request?: Request) {
	if (response.ok) {
		try {
			if (config && config.isFile) {
				return response;
			}
			return await response.json();
		} catch (error) {
			throw new Exception({
				message: error.message,
				stack: error.stack,
				response: {
					url: response.url,
					status: response.status,
					headers: response.headers
				}
			});
		}
	} else {
		throw new Exception(response);
	}
}

export async function getJson(url: string, query?: {}, config?: any): Promise<{}> {
	const headers = new Headers();
	const token = window.localStorage.getItem('TOKEN');
	if (token) {
		headers.append('X-Auth-Token', token);
	}

	const init: RequestInit = {
		method: 'GET',
		credentials: 'same-origin',
		headers: headers
	};
	const queryString = map(query, (value, key) => `${key}=${value}`).join('&');
	const response = await fetch(`${SERVICE_URL}${url}?${queryString}`, init);
	return await handleException(response, config);
}

export async function postJson(url: string, json: {}, option?: {}): Promise<{}> {
	const init: RequestInit = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(json),
		credentials: 'same-origin'
	};
	Object.assign(init, option);
	const response = await fetch(`${SERVICE_URL}${url}`, init);
	return await handleException(response);
}

export async function getJsonWithAuthCheck(url: string, authHandler: Function, query?: {}, config?: {}) {
	const response: any = await getJson(`${SERVICE_URL}${url}`, query, config);
	if (response.code && response.code === 20004) {
		authHandler();
	}
	return response;
}

export async function postJsonWithAuthCheck(url: string, json: Object, authHandler: Function, option?: {}) {
	const response: any = await postJson(`${SERVICE_URL}${url}`, json, option);
	if (response.code && response.code === 20004) {
		authHandler();
	}
	return response;
}
