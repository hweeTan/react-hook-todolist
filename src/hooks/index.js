import logger from 'redux-logger'

import { createStore } from 'utils/Store'

import useTodo from './todo'
import useCounter from './counter'

export const thunk = store => next => action => {
  if (typeof action === 'function') {
    return action(next, store.getState)
  }

  return next(action)
}

const Store = createStore(
  {
    todo: useTodo,
    counter: useCounter
  },
  [logger, thunk]
)

export default Store
