import React, { useContext } from 'react'

const context = React.createContext()
let middlewares = []

export const createStore = (reducers, wares) => {
  middlewares = wares
  return {
    Provider: ({ children }) => {
      const value = Object.keys(reducers).reduce((r, key) => {
        r[key] = reducers[key]()
        return r
      }, {})
      return <context.Provider value={value}>{children}</context.Provider>
    }
  }
}

export const useStore = () => {
  return useContext(context)
}

export const createActions = (dispatch, actionCreators) => {
  middlewares.forEach(middleware => (dispatch = middleware()(dispatch)))
  const keys = Object.keys(actionCreators)
  const result = {}
  keys.forEach(key => {
    result[key] = (...args) => dispatch(actionCreators[key](...args))
  })

  return result
}
