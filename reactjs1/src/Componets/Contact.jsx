import React from 'react'

const Contact = () => {
    const gotoHome = () =>{
        alert("hello")
    }
  return (
    <div>
      <h1>This is Contact</h1>
      <button onClick={gotoHome}>go to home Page</button>
    </div>
  )
}

export default Contact
