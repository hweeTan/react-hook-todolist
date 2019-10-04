import { useReducer, useMemo } from 'react'

import { createActions } from 'utils/Store'

import reducer from './reducer'
import { addTask, deleteTask } from './actions'

export const initialState = {
  tasks: [],
  isLoading: false
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return useMemo(
    () => ({
      ...state,
      ...createActions(dispatch, {
        addTask,
        deleteTask
      })
    }),
    [state]
  )
}
