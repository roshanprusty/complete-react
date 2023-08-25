import { ReactDOM } from "react-dom";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import './App.css';
function App(){
  return(<>
    {/* <Home /> */}
    <Router>
      <Routes>
        <Route path="/check" element={<Home />} />
      </Routes>
    </Router>
  </>)
}
export default App;