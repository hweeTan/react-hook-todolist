import React, { useContext, useReducer, useMemo } from 'react'

const context = React.createContext()
context.displayName = 'StoreContext'
let storeValue = {}
let middlewares = []
const getState = () => storeValue

export const createStore = (reducers, wares) => {
  middlewares = wares.reverse()
  return {
    Provider: React.memo(({ children }) => {
      const value = Object.keys(reducers).reduce((r, key) => {
        r[key] = reducers[key]()
        return r
      }, {})
      storeValue = value
      return <context.Provider value={value}>{children}</context.Provider>
    }),
    useStore: () => {
      return useContext(context)
    }
  }
}

export const useStore = () => {
  return useContext(context)
}

export const createActions = (dispatch, actionCreators) => {
  const store = { getState, dispatch }
  let next = dispatch
  middlewares.forEach(middleware => (next = middleware(store)(next)))
  return Object.keys(actionCreators).reduce((r, key) => {
    r[key] = (...args) => next(actionCreators[key](...args))
    return r
  }, {})
}

export const createHook = (initialState, reducer, actions) => () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const appliedActions = useMemo(() => createActions(dispatch, actions), [])
  return useMemo(
    () => ({
      ...state,
      ...appliedActions
    }),
    [state, appliedActions]
  )
}
