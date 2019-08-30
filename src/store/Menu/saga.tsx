import { takeLatest, put, call } from 'redux-saga/effects';
import { getJson } from '../../helpers/utils/HttpService';

export default function* menuFlow() {
	yield takeLatest('CHANGELLANGUAGE', changeLanguage);
}

function* changeLanguage(payload) {
	yield put({
		type: 'CHANGELLANGUAGE_EXECUTE',
		payload
	});

	yield call(getJson, 'locale');
}
