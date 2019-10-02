import { createStore } from 'utils/Store'

import useTodo from './todo'

export const logger = () => next => action => {
  console.log(action)
  return next(action)
}

export const thunk = () => next => action => {
  if (typeof action === 'function') {
    return action(next)
  }

  return next(action)
}

const Store = createStore(
  {
    todo: useTodo
  },
  [logger, thunk]
)

export default Store
