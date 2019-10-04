export const ADD_TASK = 'todo/ADD_TASK'
export const DELETE_TASK = 'todo/DELETE_TASK'
export const SET_LOADING = 'todo/SET_LOADING'

export const addTask = name => ({
  type: ADD_TASK,
  payload: { name }
})

export const setLoading = isLoading => ({
  type: SET_LOADING,
  payload: { isLoading }
})

export const deleteTask = index => (dispatch, getState) => {
  const { todo } = getState()
  console.log('log state from thunk', todo.tasks.length)
  dispatch(setLoading(true))
  setTimeout(() => {
    dispatch({
      type: DELETE_TASK,
      payload: { index }
    })
    dispatch(setLoading(false))
  }, 1000)
}
