import React, { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount((prevCount) => ++prevCount)
  }
  const handleDecrement = () => {
    setCount((prevCount) => --prevCount)
  }

  return (
    <>
      <h3>{count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default Counter
