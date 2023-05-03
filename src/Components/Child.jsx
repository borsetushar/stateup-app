import React, { useContext } from 'react'
import UserContext from './UserContext'
import { Component } from 'react'


function Child() {
  const context =useContext(UserContext);
  console.log(context)
  return (
    <div>
        <button onClick={()=>context.setUser({name:"Reevan"})}>Change the name</button>
        <h2>From Child: {context.user.name}, Address {context.city}</h2>
    </div>
  )
}

export default Child


// export class Child extends Component {
//   render() {
//     return (
//       <div>
//         <UserContext.Consumer>
//             {value => <h2>From Child: {value.user.name}</h2>}
//         </UserContext.Consumer>
//       </div>
//     )
//   }
// }

// export default Child