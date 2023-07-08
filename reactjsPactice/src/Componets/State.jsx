import {React ,useState} from 'react'

export default function State() {
    const [Data,setDeta] = useState(1)
    
    function upDateData(){ 
        setDeta(Data + 1)

    }
  return (
    <div className='App'>
        <h1>{Data}</h1>
        <button onClick={upDateData}>Update Data</button>
    </div>
  )
}
