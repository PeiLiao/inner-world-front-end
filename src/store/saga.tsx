import menuFlow from './Menu/saga';
import { all, spawn, call } from 'redux-saga/effects';
export default function* rootSaga() {
	const sagas = [menuFlow];

	yield all(
		sagas.map((saga) =>
			spawn(function*() {
				while (true) {
					try {
						yield call(saga);
					} catch (e) {
						console.log(e);
					}
				}
			})
		)
	);
}
