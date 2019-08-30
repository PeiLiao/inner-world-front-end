import { handleActions } from 'redux-actions';
import menuStore from './store';
import update from 'immutability-helper';
export const menuReducer = handleActions<menuStore, any>({
	['CHANGELLANGUAGE_EXECUTE']: (state, { payload }) => {
		return update(state, {
			$set: {
				locale: payload.locale
			}
		});
	}
});
