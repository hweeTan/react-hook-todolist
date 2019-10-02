import React, { useState } from 'react'

import { useStore } from 'utils/Store'

const ToDoList = React.memo(() => {
  const context = useStore()
  const { isLoading, tasks, addTask, deleteTask } = context.todo
  const [value, setValue] = useState('')

  const _addTask = () => {
    if (tasks.some(({ name }) => name === value)) {
      window.alert('Name cannot be duplicated!')
      return
    }
    addTask(value)
    setValue('')
  }

  const renderItem = ({ name }, index) => (
    <div key={name}>
      <span>{name}</span>
      <button onClick={() => deleteTask(index)}>X</button>
    </div>
  )

  return (
    <div>
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
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={_addTask}>Add</button>
      {tasks.map(renderItem)}
    </div>
  )
})

export default ToDoList
