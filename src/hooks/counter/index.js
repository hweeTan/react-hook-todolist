import { createHook } from 'utils/Store'

import reducer from './reducer'
import { add, take } from './actions'

export const initialState = {
  count: 0
}

export default createHook(initialState, reducer, {
  add,
  take
})
