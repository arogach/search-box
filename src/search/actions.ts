import { createActions } from 'redux-actions'
import { noop } from 'lodash/fp'

export enum ActionTypes {
  FETCH_SEARCH_PLANETS = 'SEARCH/FETCH_SEARCH_PLANETS'
}

const fetchSearchPlanets = () => createActions(ActionTypes.FETCH_SEARCH_PLANETS)

export const actions = {
  fetchSearchPlanets
}