import { useState } from "react";

function Que8(){
  let[name,setName]=useState("");
  let[age,setAge]=useState(0);
  let[city,setCity]=useState("");
  function done(){
    alert(name+" - "+age+" - "+city);
    setName("")
    setAge(0)
    setCity("")
  }
  return(<>
  <form>
    <span>Name:</span><input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <span>Age:</span><input type="number" onChange={(e) => setAge(e.target.value)}></input>
    <span>City:</span><input type="text" onChange={(e) => setCity(e.target.value)}></input>
  </form>
  <button onClick={done}>Submit</button>
  </>)
}
export default Que8;