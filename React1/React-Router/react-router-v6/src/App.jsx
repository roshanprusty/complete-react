import { ReactDOM } from "react-dom";
import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import './App.css';
import Learn from "./Components/Learn";
function App(){
  return(<>
    {/* <Home /> */}
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />

        {/* when you route to /myapp it will go to /learn  */}
        <Route path="/myapp" element={<Navigate to= "/Learn" />} /> 
        <Route path="/myapp2" element={<Navigate replace to= "/Learn" />} /> 
      </Routes>
    </Router>
  </>)
}
export default App;