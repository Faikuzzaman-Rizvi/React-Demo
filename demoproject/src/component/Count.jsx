import React from 'react';
import { useState } from 'react';

function Count() {


const [number , setNumber]=useState(0);

const handaleClick = () => {
    
    setNumber(number + 1);

}

const handaleDecriment = () => {

    if (number > 0) {
        setNumber(number - 1);
    }

  
}

const resetCount = () => {
    setNumber(0);
}


    return (
        <div>
            
            <h1>Count Component</h1>

            <input type="text" value={number} readOnly />
            <button onClick={handaleClick}>Click Me</button>
            <button onClick={handaleDecriment}>decriment</button>
            <button onClick={resetCount}>Reset</button>

       
       
        </div>
    );
}

export default Count;