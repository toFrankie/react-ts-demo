import React, { useState } from 'react'

export default function Sub2(props) {
  const [count, setCount] = useState(0)

  return (
    <div>
      Sub2 is functional component.
      <div>count: {count}</div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Add
      </button>
    </div>
  )
}
