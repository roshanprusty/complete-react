import { useRef } from "react";
import './Style.css';
function CompB(){
    const inputRef = useRef("Philal kuch nhi h");

    function clickMe(){
        console.log(inputRef.current);
        //after adding ref to input tag now you can see that whole input tag now you can access it where before you have to write big lengthy code to access it ~ that's beauty of useRef ~ so now you can make the game and can every other thing.
        // console.log(inputRef.current.type); //text
        // console.log(inputRef.current.placeholder); //type your name here!!!
        inputRef.current.focus();
        // inputRef.current.style.backgroundColor="yellow"; //you can add more functionality too.
    }
    return(<>
    <input type="text" placeholder="type your name here!!!" ref={inputRef} className="Red"/>
    <button onClick={clickMe}>Click Me</button>
    </>)
}
export default CompB;