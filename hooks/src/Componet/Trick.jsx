import React,{useContext} from 'react'
import { GB } from '../App.js'
const Trick = () => {
  const{appcolor}=useContext(GB);
  return (
    <div>
      <h1 style={{backgroundColor:appcolor}}>Gand Child</h1>
    </div>
  )
}

export default Trick
