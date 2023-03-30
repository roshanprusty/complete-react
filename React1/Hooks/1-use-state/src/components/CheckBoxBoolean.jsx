import { useState } from "react";
import "./CheckBoxBoolean.css";

function CheckBoxBollean() {
    let [liked, setliked] = useState(true);
    function handleChange(e) {
        setliked(e.target.checked); //*
    }
    return (<div className="cb">
        <h2>Checkbox Boolean</h2>
        <label>
            <input type="checkbox" onChange={handleChange} />I liked this!
        </label>
        <p>You {liked ? 'liked' : 'did not like'} this</p>
    </div>
    )
}
export default CheckBoxBollean;