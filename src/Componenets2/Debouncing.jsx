import React from 'react'

function Debouncing() {

    const handleChange =(event)=>{
        console.log("Calling API with value",event.target.value);
    }

    const deBounce=(fn,delay)=>{
        let timer;
        return function(event){
            clearTimeout(timer);
            timer =setTimeout(()=>{
                fn(event)
            },delay);
        }
    }
  return (
    <div>
        <h2>DeBouncing Componenet</h2>
        <h1>Search</h1>
        <input type="text"  onChange={deBounce(handleChange,1000)}/>
    </div>
  )
}

export default Debouncing