/* @flow */
export const POWER_CHANGE = 'POWER_CHANGE'

export function changePower (value: number): Action {
  return {
    type: POWER_CHANGE,
    payload: value
  }
}

const ACTION_HANDLERS = {
  [POWER_CHANGE]: (state: number, action: { payload: number }): number => state + action.payload
}

const initialState = 0

export default function powerReducer (state: number = initialState, action: Action): number {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
