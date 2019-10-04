import { createHook } from 'utils/Store'

import reducer from './reducer'
import { addTask, deleteTask } from './actions'

export const initialState = {
  tasks: [],
  isLoading: false
}

export default createHook(initialState, reducer, {
  addTask,
  deleteTask
})
