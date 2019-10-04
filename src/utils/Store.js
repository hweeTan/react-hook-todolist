import React, { useContext } from 'react'

const context = React.createContext()
context.displayName = 'StoreContext'
let storeValue = {}
const getState = () => storeValue
let middlewares = []

export const createStore = (reducers, wares) => {
  middlewares = wares
  return {
    Provider: React.memo(({ children }) => {
      const value = Object.keys(reducers).reduce((r, key) => {
        r[key] = reducers[key]()
        return r
      }, {})
      storeValue = value
      return <context.Provider value={value}>{children}</context.Provider>
    })
  }
}

export const useStore = () => {
  return useContext(context)
}

export const createActions = (dispatch, actionCreators) => {
  const store = { getState, dispatch }
  middlewares.forEach(middleware => (dispatch = middleware(store)(dispatch)))
  return Object.keys(actionCreators).reduce((r, key) => {
    r[key] = (...args) => dispatch(actionCreators[key](...args))
    return r
  }, {})
}
