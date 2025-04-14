
import Navber from './component/Navber';
import Hero from './component/Hero';
import { useState } from 'react';

const App = () => {

  const [number,setNumber]=useState()

  let marks =number;

  return (
    <div>

    <form action="">
          <input type="text" onChange={(e)=>setNumber(e.target.value)} />
          <button>check result</button>
    </form>

    {( () =>{

      if(marks>80 && marks<100){
        return <h1>A+</h1>
      }
      else if(marks>70 && marks<80){
        return <h1>A</h1>
      }
      else{
        return <h1>Youe are not Allow!</h1>
      }
        

    }) ()}

    </div>
  );
};

export default App;