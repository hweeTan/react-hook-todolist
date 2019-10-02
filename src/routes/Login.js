import React from 'react'

import { useStore } from 'utils/Store'

export default function Login() {
  const context = useStore()
  const { tasks, deleteTask } = context.todo

  const renderItem = ({ name }, index) => (
    <div key={name}>
      <span>{name}</span>
      <button onClick={() => deleteTask(index)}>X</button>
    </div>
  )

  return (
    <div>
      <h1>Login</h1>
      {tasks.map(renderItem)}
    </div>
  )
}
