import React from 'react'

import ToDoList from 'components/ToDoList'
import Counter from 'components/Counter'
import { useStore } from 'utils/Store'

const Home = React.memo(() => {
  const { counter, todo } = useStore()
  const { count, add, take } = counter
  const { isLoading, tasks, addTask, deleteTask } = todo
  return (
    <div>
      <h1>Todo</h1>
      <ToDoList
        isLoading={isLoading}
        tasks={tasks}
        addTask={addTask}
        deleteTask={deleteTask}
      />
      <h2>Counter</h2>
      <Counter count={count} add={add} take={take} />
    </div>
  )
})

export default Home
