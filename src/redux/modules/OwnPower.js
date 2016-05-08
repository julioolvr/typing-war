/* @flow */
export const OWN_POWER_CHANGE = 'OWN_POWER_CHANGE'

export function changeOwnPower (value: number): Action {
  return {
    type: OWN_POWER_CHANGE,
    payload: value
  }
}

const ACTION_HANDLERS = {
  [OWN_POWER_CHANGE]: (state: number, action: { payload: number }): number => state + action.payload
}

export const initialState = 0

export default function ownPowerReducer (state: number = initialState, action: Action): number {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
