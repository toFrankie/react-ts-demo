import React, { useState } from "react"

export default function Root(props) {
  const [count, setCount] = useState(0)

  return (
    <div>
      root element1
      <div>count: {count}</div>
      <button onClick={() => { setCount(count + 1) }}>Add</button>
    </div>
  )
}