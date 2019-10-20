import { put } from 'redux-saga/effects'

import { actions as SearchActions } from './actions'

export const searchPlanets = function* (input: string) {
  try {
    yield put(SearchActions.fetchSearchPlanets())
  } catch (err) {
    console.log(err)
  }
}