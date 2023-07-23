import axios from "axios";
import { call, put } from "redux-saga/effects";
import { get } from "../slice";

export function* getUser() {
  const user = yield call(() => axios.get("https://api.github.com/users"));
  const data = user.data;
  yield put(get(data));
}
