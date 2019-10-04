import thunk from 'redux-thunk'

import { createStore } from 'utils/Store'

import useTodo from './todo'
import useCounter from './counter'

const Store = createStore(
  {
    todo: useTodo,
    counter: useCounter
  },
  [thunk]
)

export default Store
