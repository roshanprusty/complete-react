import { useRef, useState } from "react";
function CompA(){
    const[countState, updateStateCount]= useState(0);
    const countRef = useRef(0); //countRef is an object || value stored in current if you want to access it you can access from countRef.current 
    function incState(){
      updateStateCount(countState+1);
      console.log(countState);
    }
    function incRef(){
      countRef.current+=1;
      console.log(countRef.current);
    }
    return(<>
      <p>{countState}</p>
      <p>{countRef.current}</p>
      <button onClick={incState}>Count-state</button>
      <button onClick={incRef}>Count-Ref</button>
    </>)
}
export default CompA;