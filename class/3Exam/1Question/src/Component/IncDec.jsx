import { useState } from "react";
import './style.css'
function IncDec() {
    let [count, setCount] = useState(0);
    let countValue=true;
    function increase() {
        setCount(count + 1);
    }
    function decrease() {
        setCount(count - 1);
    }
    if(count!==0) countValue=false;
    return (<>
        <div className="center">
            <button onClick={increase}>+</button>
            <span><p>{count}</p></span>
            <button onClick={decrease} disabled={countValue}>-</button>
        </div>
    </>)
}
export default IncDec;