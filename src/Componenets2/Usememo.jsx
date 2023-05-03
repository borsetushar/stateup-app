import React, { useMemo, useState } from 'react'

function Usememo() {

    const [numberA, setNumberA] = useState(0);
    const [numberB, setNumberB] = useState(0);
    
    const callThisFunctionwhenNumberBchanges = useMemo(()=>{
        console.log("callThisFunctionwhenNumberBchanges");
    },[numberB])

    const changeNumberA=()=>{
        setNumberA(numberA+1);
    }

    const changeNumberB=()=>{
        setNumberB(numberB+1);
    }
  return (
    <div>
        {callThisFunctionwhenNumberBchanges}
        <h1>{numberA}</h1>
        <h1>{numberB}</h1>
        <button onClick={changeNumberA}>Increment Number A</button>
        <button onClick={changeNumberB}>Increment Number B</button>
    </div>
  )
}

export default Usememo