import './App.css'
import { useEffect, useState } from 'react'
function App() {
  let[resourceType,setResourceType] = useState("HOME");
  console.log("App component rendered");
  useEffect(()=>{console.log(resourceType)},[resourceType]);  
  return (
   <>
    <button onClick={()=> setResourceType("HOME")}>HOME</button>
    <button onClick={()=> setResourceType("ABOUT")}>ABOUT</button>
    <button onClick={()=> setResourceType("CONTACT")}>CONTACT</button>
    <h2>{resourceType}</h2>
   </>
  )
}

export default App
