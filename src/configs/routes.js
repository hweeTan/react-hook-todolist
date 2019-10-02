import React from 'react'
import { Route } from 'react-router-dom'

import Home from 'routes/Home'
import Login from 'routes/Login'

export default [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/login',
    component: Login,
    name: 'Login'
  }
]

export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact
      render={props => <route.component {...props} routes={route.routes} />}
    />
  )
}
