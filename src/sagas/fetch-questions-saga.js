import { put, take } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch';
/**
 * Fetch questions saga gets a list of all new
 * questions in response to a particular view being loaded
 */
export default function * () {
    while (true) {
        /**
         * Wait for a request to fetch questions, then fetch data from the API and notify the application
         * that new questions have been loaded.
         */
  console.log("rstep 1");
        yield take(`REQUEST_FETCH_QUESTIONS`);

        console.log("rstep 1");

        const raw = yield fetch('/api/questions');

        console.log("raw", raw);

        const json = yield raw.json();

        console.log("json", json);

        const questions = json.items;

        yield put({type:`FETCHED_QUESTIONS`,questions});
    }
}
