import React from 'react';

const Hero = (props) => {
   
    return (
        <div>
            <h1>{ props.title }</h1>
            <p>{ props.des }</p>
            <h2>{props.item.name}</h2>
            { props.tanvir(1)}

            <button onClick={props.childBtn} >submit</button>
        </div>
    );
};

export default Hero;