import { useState } from "react";
import "./Form.css";
function Form() {
    let[name, setname]=useState("");
    function handleChangeName(e){
        setname(e.target.value);
    }
    let[age, setage]=useState(0);
    function handleChangeAge(e){
        setage(e.target.value);
    }
    function handleChange(){
        setname("");
        setage(0);
    }
    return (<form className="form">
        <h2>FORM</h2>
        <span />Name: <input type="text" onChange={handleChangeName}/>
        <span /> Age: <input type="number" onChange={handleChangeAge}/>
        <p>Hello everyone my name is {name} and my age is {age}</p>
        <button onClick={handleChange}>RESET</button>
    </form>)
}
export default Form;