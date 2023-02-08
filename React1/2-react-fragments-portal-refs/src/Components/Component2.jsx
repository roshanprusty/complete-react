import React,{useState} from "react";
import { flushSync } from "react-dom";
import Modal from "./Modal";
import PortalComponent from "./PortalComponent";
function Component2(){
    let[showModal,updateShowModal]=useState(false);
    function displayModel(){
        updateShowModal(true);
    }
    function hideModal(){
        updateShowModal(false);
    }
    return(
        <div style={{width: 300,position:"relative"}}>
        {/* look out : even after styling here alert box width doesnot change that's beauty of the portals */}
        <h2>This is component2</h2>
        <p>This is a paragraph</p>
        {/* <PortalComponent /> */}
        <button onClick={displayModel}>show model</button>
        <Modal showModal={showModal} hideModal={hideModal}/>
        </div>
    )
}
export default Component2; 