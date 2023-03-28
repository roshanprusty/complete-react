import { useState } from "react";
import './Counter.css'

function Counter(){
    let[count, setcount] = useState(0); //
    let countValue=true;
    function inc(){
        setcount(count+1);
    }
    function dec(){
        setcount(count-1);
    }
    if(count!==0) countValue=false;
    return(<div className="incdec">
        <h2>Counter (Number)</h2>
        <button onClick={inc}>INCREMENT</button>
        <p>{count}</p>
        <button onClick={dec} disabled={countValue}>DECREMENT</button>


    </div>)
}
export default Counter;