import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [counterOne, setcounterOne] = useState(0)
    const Incrementone = () => {
        setcounterOne(counterOne + 1)
    }
    return (
        <div>
            <Child />
            <button onClick={Incrementone}>Counter - {counterOne}</button>
        </div>
    )
}

export default Parent
