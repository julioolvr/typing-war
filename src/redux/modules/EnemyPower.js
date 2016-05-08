/* @flow */
import { TICK } from './Tick'

export const ENEMY_POWER_CHANGE = 'ENEMY_POWER_CHANGE'

export function changeEnemyPower (value: number): Action {
  return {
    type: ENEMY_POWER_CHANGE,
    payload: value
  }
}

const ACTION_HANDLERS = {
  [ENEMY_POWER_CHANGE]: (state: number, action: { payload: number }): number => state + action.payload,
  [TICK]: (state: number): number => state + 10 // TODO: Is this the best place for this business logic?
}

export const initialState = 0

export default function enemyPowerReducer (state: number = initialState, action: Action): number {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
