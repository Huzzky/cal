import { userActionsReducer } from './reducers/userActionsReducer'
import { combineReducers } from 'redux'
import { appOtherInfoReducer } from './reducers/appOtherInfoReducer'

export const allReducers = combineReducers({
  userActionsReducer,
  appOtherInfoReducer,
})
