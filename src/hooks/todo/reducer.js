import { ADD_TASK, DELETE_TASK, SET_LOADING } from './actions'

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, payload]
      }

    case DELETE_TASK:
      state.tasks.splice(payload.index, 1)
      return {
        ...state,
        tasks: [...state.tasks]
      }

    case SET_LOADING:
      return {
        ...state,
        isLoading: payload.isLoading
      }

    default:
      return state
  }
}

export default reducer
