import React, { useContext } from 'react'
import Child from './Child'
import UserContext from './UserContext'

function Greet() {
  const context = useContext(UserContext)
  return (
    <div>
      <button onClick={()=>context.setEducation({Batch:"B.Tech"})}>Change the Education</button>
        <h2>From Greet: {context.Education.Batch}</h2>
        <Child/>
    </div>
  )
}

export default Greet