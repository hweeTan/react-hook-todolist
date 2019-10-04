This project is an attempt to utilize hooks and context in order to replace redux/react-redux.

## The idea
The main concept is to minimize the boilerplate code as much as possible and make state management ready to use with just a hook.

Desired API:

```js
const Counter = () => {
  const { count, increment } = useStore().counter

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  )
}
```

## Current approach
At the moment, a combination of `useReducer`, `useMemo` and `useContext` is being used to achieve "redux-like" state management with actions creators and reducer. One hook would have 3 files: *actions*, *reducer* and *index*.

**actions.js**
```js
  export const INCREMENT = 'counter/INCREMENT'

  export const increment = () => ({
    type: INCREMENT
  })
```

**reducer.js**
```js
import { INCREMENT } from './actions'

export default (state, { type }) => {
  switch (type) {
    case INCREMENT:
      return {
        count: state.count + 1
      }

    default:
      return state
  }
}
```

**index.js**
```js
import { createHook } from 'utils/Store'

import reducer from './reducer'
import { increment } from './actions'

export const initialState = {
  count: 0
}

export default createHook(initialState, reducer, {
  increment
})
```