 import ReactDOM from "react-dom";
 function PortalComponent(){
    return ReactDOM.createPortal(<h2>This is portal Component</h2>,document.getElementById("root-portal"));
 }
 export default PortalComponent;