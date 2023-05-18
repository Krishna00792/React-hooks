import React, {useState, useEffect, useRef} from "react";

const useRefExample = () => {
  const [firstName, setFirstName] = useState("");
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return(
    <div style={{ textAlign: "center", fontSize: "40px", margin: "50px", padding: "50px" }}>
      <input
        type="text"
        name="firstName"
        id="firstName"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <br/>
      <br/>
      <h2> Typing: {firstName} </h2>
      <br/>
      <h1>Component rendereed {renderCount.current} times </h1>
    </div>
  );
};

export default useRefExample;

// import { useRef } from "react";

// const useRefExample = () => {
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     if (inputRef.current) {
//       inputRef.current.value = 'Hello, useRef';
//     }
//   };
//   return(
//     <div>
//       <input type="text" ref={inputRef}/>
//       <button onClick={handleClick}>Update input value</button>
//     </div>
//   )
// }

// export default useRefExample;


// import React, { useRef, useState } from 'react';

// export default function UseRefHookExp() {
//   // const [count, setCount] = useState(0);
//   const ref = useRef(0);

//   const handleClick = () => {
    
//     // setCount(count + 1); // This triggers a re-render
//     ref.current += 1;   // This does NOT trigger a re-render
//     console.log(ref.current);
//   };

//   return (
//     <div>
//       {/* <p>Count: {count}</p> */}
//       <p>Ref: {ref.current}</p>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//   );
// }
