import { useReducer, useMemo } from 'react'

import { createActions } from 'utils/Store'

import reducer from './reducer'
import { add, take } from './actions'

export const initialState = {
  count: 0
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return useMemo(
    () => ({
      ...state,
      ...createActions(dispatch, {
        add,
        take
      })
    }),
    [state]
  )
}
