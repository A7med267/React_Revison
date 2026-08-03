import React from 'react'
import { useState } from 'react'
import '../App.css';

function HookState() {
  const  [name,setName] = useState("Ahmed")

  function buttonClicked(){
    if (name === "Ahmed"){
      setName("Ramadan")
    }else{
      setName("Ahmed")
    }
    
  }
  return (
    <div>
      <button onClick={buttonClicked} >click</button>
      <h1>{name}</h1>
    </div>
  )
}

export default HookState


// import React, { useState } from 'react';

// function HookState() {
//   const [count, setCount] = useState(0);
  
// return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>
        
//         Click me
//       </button>
//         <p>You clicked {count} times</p>
//     </div>
//   );
// }

// export default HookState ;