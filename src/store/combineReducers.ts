import { combineReducers } from 'redux'
import { monthDateReducer } from './reducers/monthDateReducer'

export const allReducers = combineReducers({
  monthDateReducer,
})
