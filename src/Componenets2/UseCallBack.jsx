import React, { memo, useCallback, useState } from 'react'

function UseCallBack() {
    const [counter, setCounter] = useState(0);
    
    const someFunction=useCallback(()=>{
        console.log("Getting call from some function");
    },[])
  return (
    <div>
        <h2> UsecallBack counter {counter}</h2>
        <button onClick={()=> setCounter(counter+1)}>Increment Counter</button>
        <ComponentA someFunction={someFunction}/>
    </div>
  )
}

export default UseCallBack

const ComponentA=memo((props)=>{
    console.log('componenet a rendered')
    return(
        <div>
            <h2>ComponentA</h2>
            {props.someFunction()}
        </div>
    )
})

