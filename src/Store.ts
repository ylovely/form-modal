import { createStore, combineReducers } from 'redux'
import { reducer as form } from './form-modal'

export default createStore(combineReducers({
  form
}))

