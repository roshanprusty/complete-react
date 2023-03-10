import { useState } from "react";
import './Form.css';
function Form() {
    let [name, setname] = useState("roshan");
    let [age, setage] = useState("21");
    let [skills, setskills] = useState("JS");
    function handleChangeName(e) {
        setname(e.target.value);
    }
    function handleChangeAge(e) {
        setage(e.target.value);
    }
    function handleChangeskills(e) {
        setskills(e.target.value);
    }
    function handleChange(){
        setname("");
        setage("");
        setskills("");
    }
    return (<>
        <form>
            <span>Name: </span> <input type="text" onChange={handleChangeName} />
            <span> Age: </span> <input type="text" onChange={handleChangeAge} />
            <span> Skills: </span> <input type="text" onChange={handleChangeskills} />
            <br />
            <button onClick={handleChange}>RESET</button>
        </form>
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Skills</th>
            </tr>
            <tr>
                <td>{name}</td>
                <td>{age}</td>
                <td>{skills}</td>
            </tr>
        </table>
    </>)
}
export default Form;