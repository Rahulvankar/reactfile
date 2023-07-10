import React, { useMemo, useState } from 'react'

export default function Usememo(props) {

    const [counterOne, setcounterOne] = useState(0)
    const [counterTwo, setcounterTwo] = useState(0)
    const Incrementone = () => {
        setcounterOne(counterOne +1)
    }
    const Incrementtwo = () => {
        
        setcounterTwo(counterTwo +1)
    }


    const isEven=useMemo(()=>{
        console.log("hell")
        let i = 0;
        while(i<2000000000) i++;
        return counterOne%2===0
    },[counterOne])

    return (
        <div>
            <button onClick={Incrementone}>Counter - {counterOne}</button>
            <span>{isEven?"Even":"odd"}</span>
             <button onClick={Incrementtwo}> Counter - {counterTwo}</button>
        </div>
    )
}
