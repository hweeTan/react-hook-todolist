import React, { useState } from 'react'

const ToDoList = React.memo(({ tasks, addTask, deleteTask }) => {
  const [value, setValue] = useState('')
  const [testVal, setTestVal] = useState('')

  console.log('render todo')

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
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={() => setTestVal(Math.random())}>{testVal}</button>
      <button onClick={_addTask}>Add</button>
      {tasks.map(renderItem)}
    </div>
  )
})

export default ToDoList
