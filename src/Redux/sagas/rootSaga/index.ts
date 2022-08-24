import { all } from "redux-saga/effects";
import booksWatcher from "../bookSaga";


function* rootSaga() {
  yield all([booksWatcher()]);
}

export default rootSaga;