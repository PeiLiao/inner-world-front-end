import { REDIRECT_TO_TABLE } from "./actions";

export const redirectToTable = (state = {}, action) => {
	switch (action.type) {
		case REDIRECT_TO_TABLE:
			return action.filter;
		default:
			return state;
	}
};

export const refresh = (state = {}, action) => {
	switch (action.type) {
		case REDIRECT_TO_TABLE:
			return action.filter;
		default:
			return state;
	}
};
