import React, { useState } from 'react'

const StateTutorial = () => {

  const [inputValue, newChangeValue] = useState("Rahul");
  const onChange = (event) => {
    const newval = event.target.value;
    newChangeValue(newval)
  }
  console.log(inputValue)
  return (
    <div>
      <h1>{inputValue}</h1>
      <input type='text' value={inputValue} onChange={onChange} placeholder='Type Somthing..' />
    </div>
  )
}
export default StateTutorial;