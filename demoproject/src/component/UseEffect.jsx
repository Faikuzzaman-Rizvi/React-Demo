import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((json) => setData(json));
//   }, []);


useEffect(()=>{

(async()=>{
    let response = await fetch('https://dummyjson.com/users')
    let result = await response.json();
    setData(result);

})()

},[])

  return (
    <div>

    {JSON.stringify(data)}

    </div>
  );
};

export default UseEffect;
