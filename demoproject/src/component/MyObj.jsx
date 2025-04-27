import React from 'react';
import { useState } from 'react';

function MyObj() {

const [obj ,setObj] =useState({
    name: "John",
    age: 30,
    location: "New York",   
    hobbies: ["reading", "traveling", "cooking"],

})

const Change = () => {
    setObj(perviusObj => ({
        
            ...perviusObj,
            name: "Doe",
            age: 25,
            location: "Los Angeles",
            hobbies: ["sports", "music", "art"],
        
    }))

}


    return (

        <div>
            <h1>{obj.name}</h1>
            <h2>{obj.age}</h2>
            <h3>{obj.location}</h3>
            <h4>{obj.hobbies.join(" | ")}</h4>
            <h5>{obj.hobbies[2]}</h5>
            
            <button onClick={Change}>Change</button>
            
        </div>

    );
}

export default MyObj;