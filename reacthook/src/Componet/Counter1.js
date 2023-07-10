import React, { useEffect } from 'react'

 function Counter1({number}) {
    useEffect(()=>{
    console.log("Function Componet : Upading...")
    return ()=>{
        
        console.log("Function Componet : remove")
    }
    },[number])
  return (
    
        <h1>{number}</h1>
    
  )
}
export default Counter1
