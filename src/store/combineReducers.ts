import { userActionsReducer } from './reducers/userActionsReducer'
import { combineReducers } from 'redux'

export const allReducers = combineReducers({
  userActionsReducer,
})
