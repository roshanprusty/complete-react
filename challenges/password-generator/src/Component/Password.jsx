import { useState } from "react";

function Password(){
    let[length, setLength]= useState(5);
    let[number, setNumber] = useState(false);
    let[character, setCharacter] = useState(false);
    let[result, setResult]=useState("");
    function handleNumber(e){
        setNumber(e.target.checked);
    }
    function handleCharacter(e){
        setCharacter(e.target.checked);
    }
    function handleLength(e){
        setLength(e.target.value);
    }
    function generate(){
        let newPass="";
        if(length<5 || length>50 ){
            window.alert("Please have a length of password between 5 to 50");
            return;
        } 

        let sc =" !@#$%^&*()-_+={}[]|";
        let letter ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        
        
        for(let i=1; i<=length; i++){
            if(number && i%3===0) {
                newPass+=Math.floor((Math.random() * 10) + 1);
                continue;
            }
            if(character && i%5===0) {
                newPass+=sc[Math.floor(Math.random() * sc.length)];
                continue;
            }
            newPass+=letter[Math.floor(Math.random() * letter.length)];
        }
       setResult(newPass);
        
    }
    return(<>
    <h2>PASSWORD GENERATOR</h2>
    <span>Password Character: </span><input type="number" min={5} max={50} onChange={handleLength}></input><br />
    <input type="checkbox" onChange={handleNumber}/> Numbers <br />
    <input type="checkbox" onChange={handleCharacter}/> Special Character <br />
    <button type="submit" onClick={generate}>SUBMIT</button>
    <p>Your New Passowrd: {result}</p>
    
    </>)
}
export default Password;