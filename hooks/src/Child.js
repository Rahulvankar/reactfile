import React ,{useContext}from 'react'
import { GB } from './App'
const Child = () => {
    const{appcolor}=useContext(GB);
    console.log("appcolor", appcolor)
    return (
        <div>
            <h1 style={{color:appcolor}}>Child Component</h1>
        </div>
    )
}

export default Child
