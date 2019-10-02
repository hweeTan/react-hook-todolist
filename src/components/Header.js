import React from 'react'
import { Link } from 'react-router-dom'

import routes from 'configs/routes'

const Header = () => {
  return (
    <nav>
      {routes.map(({ path, name }) => (
        <Link key={path} to={path}>
          {name}
        </Link>
      ))}
    </nav>
  )
}

export default Header
