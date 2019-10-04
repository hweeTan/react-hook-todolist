import React from 'react'

export default React.memo(({ count, take, add }) => {
  console.log('render counter')
  return (
    <div>
      <button onClick={take}>-</button>
      <span>{count}</span>
      <button onClick={add}>+</button>
    </div>
  )
})
