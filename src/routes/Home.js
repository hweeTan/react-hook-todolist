import React from 'react'

import ToDoList from 'components/ToDoList'

const Home = React.memo(() => {
  return (
    <div>
      <h1>Todo</h1>
      <ToDoList />
    </div>
  )
})

export default Home
