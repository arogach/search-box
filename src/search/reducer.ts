import { handleActions } from 'redux-actions'

import { ActionTypes } from './actions'

import { SearchState } from './interfaces'

const initialState: SearchState = {
  input: '',
  loading: false,
  searchList: []
}

const reducer = (state = initialState, action: any): SearchState => {
  switch (action.type) {
    case ActionTypes.FETCH_SEARCH_PLANETS: {
      return ({
        ...state,
        loading: false,
        searchList: []
      })
    }
  }

  return state
}

export default reducer