import { useReducer } from 'react'

import { createActions } from 'utils/Store'

import reducer from './reducer'
import { addTask, deleteTask } from './actions'

export const initialState = {
  tasks: new Array(100).fill(1).map((e, i) => ({ name: i.toString() })),
  isLoading: false
}

const useTodo = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return {
    ...state,
    ...createActions(dispatch, {
      addTask,
      deleteTask
    })
    // addTask: name => dispatch(addTask(name)),
    // deleteTask: index => dispatch(deleteTask(index))
  }
}

export default useTodo
