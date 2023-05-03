import React from 'react'

function Throttling() {

    const handler =()=>{
        console.log("Handler called");
    }

    const throttle=(fn,delay)=>{
        let run = false;
        return function(){
            if(!run){
                fn();
                run = true;
                setTimeout(()=>{
                    run=false
                },delay)
            }
        }
    }

    window.addEventListener("mousemove",throttle(handler,1000));
  return (
    <div>
        <h1>Throttling Component</h1>
    </div>
  )
}

export default Throttling
