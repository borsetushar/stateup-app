import { useState } from 'react';
import './App.css';
import Debouncing from './Componenets2/Debouncing';
import ReactLazy from './Componenets2/ReactLazy';
import Throttling from './Componenets2/Throttling';
import UseCallBack from './Componenets2/UseCallBack';
import Usememo from './Componenets2/Usememo';
import Child from './Components/Child';
import Greet from './Components/Greet';
import Guest from './Components/Guest';
import User from './Components/User';
import UserContext from './Components/UserContext';

function App() {
  const [user, setUser] = useState({name: "Tushar"});
  const [Education, setEducation] = useState({Batch: "Computer Science"});
  const [Details, setDetails] = useState({RollNo:44});
  const [Mstatus, setMstatus] = useState({Married: 'No'});
  return (
    <div className="App">
      <UserContext.Provider value={{user, Education, Details, Mstatus, setUser, setEducation, setMstatus, setDetails,city: "Nashik"}}>
         <Guest/>
      </UserContext.Provider> 
       <UseCallBack/> 
      <Debouncing/>
       <Throttling/>
       <ReactLazy/>
    </div>
  );
}

export default App;
