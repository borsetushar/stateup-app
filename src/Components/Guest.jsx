import React, { useContext } from 'react'
import User from './User'
import UserContext from './UserContext'

function Guest() {
  const context = useContext(UserContext);
  return (
    <div>
      <button onClick={()=>context.setMstatus({Married: "Yes"})}>Change the Mstastus</button>
        <h2>From Guest: {context.Mstatus.Married}</h2>
        <User/>
    </div> 
  )
}

export default Guest