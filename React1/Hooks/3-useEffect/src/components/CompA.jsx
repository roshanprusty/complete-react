import { useEffect, useState } from "react";

function CompA(){
    let[counter, setCounterValue]=useState(0);
    let[counter2, setCounterValue2]=useState(0);

    // function mounted(){ console.log("component mounted")}
    // mounted();
    
    // useEffect(()=>{console.log("!!!")})
    // useEffect(()=>{console.log("!!!")},[])
    useEffect(()=>{console.log("!!!")},[counter2])
    return(<>
    <p>{counter}</p>
    <p>{counter2}</p>
    <button onClick={(()=>setCounterValue(counter+1))}>click Me1</button>
    <button onClick={(()=>setCounterValue2(counter2+1))}>click Me2</button>
    </>)
}
export default CompA;