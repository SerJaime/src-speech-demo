'use client'
import { useState } from 'react';

export default function Counter ({ defaultValue }) {
  const [count, setCount] = useState(defaultValue);

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="counter">
      <strong className="cc">Client Component</strong>
      <div>{count}</div>
      <button onClick={handleClick}>+</button>
    </div>
  )
}