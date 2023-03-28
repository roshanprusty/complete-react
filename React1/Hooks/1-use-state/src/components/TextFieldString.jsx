import { useState } from "react";
import "./TextFieldString.css";
function TextFieldString() {
    const [text, setText] = useState('hello');

    function handleChange(e) {
        setText(e.target.value); //*
    }

    return (
        <div className="TF">
            <h2>TEXT FIELD STRING</h2>
            <input onChange={handleChange} /> //*
            <p>You typed: {text}</p>
            <button onClick={() => setText('hello')}>
                Reset
            </button>
        </div>)
}
export default TextFieldString;