// import { call, put, takeEvery } from "redux-saga/effects";
import { search } from "../../api";

// function* getList(action) {
//   yield put({ type: "SET_LOADING", payload: true });
//   try {
//     const list = yield call(search, action.payload);
//     yield put({ type: "SET_LIST", payload: list });
//     yield put({ type: "SET_LOADING", payload: false });
//   } catch (e) {
//     yield alert(e.message);
//   }
// }
//
// function* sagas() {
//   yield takeEvery("SEARCH", getList);
// }
// export default sagas;
