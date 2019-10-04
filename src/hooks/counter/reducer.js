import { ADD, TAKE } from './actions'

const reducer = (state, { type }) => {
  switch (type) {
    case ADD:
      return {
        count: state.count + 1
      }

    case TAKE:
      return {
        count: state.count - 1
      }

    default:
      return state
  }
}

export default reducer
