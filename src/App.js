import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from 'components/Header'
import routes, { RouteWithSubRoutes } from 'configs/routes'

import Store from 'hooks'

function App() {
  return (
    <Store.Provider>
      <ThemeProvider theme={{}}>
        <Router className="App">
          <Header />
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Router>
      </ThemeProvider>
    </Store.Provider>
  )
}

export default App
