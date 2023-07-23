import { takeLatest, takeEvery } from "redux-saga/effects";
import { getUser } from "./sagarequests";
export function* sagaWatcher() {
  yield takeEvery("Slicers/add", getUser);
  yield takeEvery("Slicers/del", getUser);
}
