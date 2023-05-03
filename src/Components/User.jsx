import React, { useContext } from 'react'
import Child from './Child'
import Greet from './Greet'
import UserContext from './UserContext'

function User() {
  const context = useContext(UserContext)
  return (
    <div>
      <button onClick={()=>context.setDetails({RollNo:"41"})}>Change the RollNo</button>
        <h2>From User: {context.Details.RollNo}</h2>
        <Greet />
    </div>
  )
}

export default User