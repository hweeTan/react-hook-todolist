import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from 'components/Header'
import routes, { RouteWithSubRoutes } from 'configs/routes'
import { useStore } from './utils/Store'

import Store from 'hooks'

function AppContent() {
  const { todo } = useStore()
  const { isLoading } = todo
  return (
    <Router className="App">
      {isLoading && (
        <p
          style={{
            position: 'fixed',
            top: 20,
            right: 20
          }}
        >
          ...Loading
        </p>
      )}
      <Header />
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Router>
  )
}

function App() {
  return (
    <Store.Provider>
      <ThemeProvider theme={{}}>
        <AppContent />
      </ThemeProvider>
    </Store.Provider>
  )
}

export default App
