import { useState } from "react";

 const App = () => {
   
  //hook
 //const foushState =  useState(0)
 //const foush = foushState [0];
 //const setfoush = foushState [1];

 const [foush , setfoush] = useState(0);

  return (
   <div>
    <h1> {foush} ta foush bad!</h1>
    <button onClick={()=> {
        setfoush(foush + 1)
    }}>foush</button>
       <button onClick={()=> {
        setfoush(foush - 1)
    }}>tarif</button>
   </div> 
  )
}

export default App;