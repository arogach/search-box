import { ReducersMapObject, combineReducers } from 'redux'

import searchReducer from './search/reducer'
import { ApplicationState } from './reducers.interfaces'

const appReducer: ReducersMapObject<ApplicationState, any> = {
  search: searchReducer
}

export default combineReducers(appReducer)

