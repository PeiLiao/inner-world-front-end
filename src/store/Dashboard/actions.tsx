export const REDIRECT_TO_TABLE = "REDIRECT_TO_TABLE";

export const redirectToTable = (filter) => {
	return {
		type: REDIRECT_TO_TABLE,
		filter
	};
};
