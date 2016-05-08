/* @flow */
export const TICK = 'TICK'

export function tick (): Action {
  return {
    type: TICK
  }
}

const ACTION_HANDLERS = {
  [TICK]: (state: number): number => state + 1
}

export const initialState = 0
export default function tickReducer (state: number = initialState, action: Action): number {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
