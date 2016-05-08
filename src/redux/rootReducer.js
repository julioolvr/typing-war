import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import power from './modules/power'

export default combineReducers({
  counter,
  router,
  ownPower: power,
  enemyPower: power
})
