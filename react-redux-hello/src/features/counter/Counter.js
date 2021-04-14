import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decremented,
  incremented,
  incrementedByValue,
  selectCount
} from './counterSlice'

export function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementValue, setIncrementValue] = useState('2')

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incremented())}
        >
          +
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decremented())}
        >
          -
        </button>
      </div>
      {/* omit additional rendering output here */}
    </div>
  )
}