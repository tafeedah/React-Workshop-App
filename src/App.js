import React, {useState} from 'react';
import './App.css';
import Accordian from './Components/Accordian/Accordian';


function App() {
    
    
    

  return (
    <div  className="App">

         <h1>Hello, Codex</h1>

      <Accordian>
      <p>Enter Password</p><input/>  
      <button>Submit</button>
       </Accordian>
  
 
    </div>
      
  );
}



export default App;
