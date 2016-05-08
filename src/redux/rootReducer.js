import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import ownPower from './modules/OwnPower'
import enemyPower from './modules/EnemyPower'

export default combineReducers({
  router,
  ownPower,
  enemyPower
})
