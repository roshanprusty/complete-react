import { useState,useRef } from "react";
import axios from 'axios'

function App(){
  let fname = useRef();
  let lname = useRef();

  function AddUsers(){
    axios.post("https://fir-897b5-default-rtdb.firebaseio.com/")
  }
  return(<>
    <form>
      <input type="text" placeholder="First Name" ref={fname}/>
      <input type="text" placeholder="Last Name" ref={lname}/>
      <br />
      <button type="Submit" onClick={AddUsers}>Add</button>
      <button type="Submit">GET</button>

    </form>
  </>)
}

export default App;
