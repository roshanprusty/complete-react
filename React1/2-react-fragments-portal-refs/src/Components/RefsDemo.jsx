import { useRef } from "react";

function RefsDemo(){
    let nameInputRef = useRef("Please specify your name");
    function showNameEventHandler(){
        console.log(nameInputRef.current);
        console.log(nameInputRef.current.value);
    }
    return(<>
    <span>Name:</span>
    <input type="text" ref={nameInputRef}></input>
    <button onClick={showNameEventHandler}>Show Name</button>
    </>);
}
export default RefsDemo;