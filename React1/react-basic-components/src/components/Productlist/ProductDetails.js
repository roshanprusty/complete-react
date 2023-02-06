// import Button from "./Button";
// import React,{useState} from "react";
 
// function ProductDetails(props) {
//     // let isAvailable = props.isAvailable
//     let badgeClass = "badge-margin-left-40 badge "
//     badgeClass += props.isAvailable ? "bg-success" : "bg-danger";

//     // let productCount = 0;
//     let [productCount, upateCount] = useState(0);
//     function displayFormattedCount() {
//         //  return productCount > 0 ? productCount :"zero";
//         return productCount > 0 ? productCount : <h1>zero</h1>; //this is also possible jsx expression is just a js object. 
//     }

//     let incrementProductCount = () => {
//         // productCount++;
//         // console.log(productCount);
//         upateCount(++productCount);
//     }
//     let decrementProductCount = () => {
//         // productCount--;
//         // console.log(productCount);
//         upateCount(--productCount);

//     }
//     return (
//         <div class="d-flex align-items-center justify-content-start mt-1">
//             <h6 class="font-weight-bold my-2" style={{ 'margin-right': 30 }}>${props.price}</h6>
//             <Button eventHandler={decrementProductCount}>- </Button>
//             <span style={{ padding: '8px 14px', 'font-size': 13 }}>{displayFormattedCount()}</span>
//             {/* <Button children={"hello"}>+</Button> */}
//             <Button eventHandler={incrementProductCount}>+</Button>
//             <span className={badgeClass}>{props.isAvailable ? "Available" : "Unavailable"}</span>
//             {/* {props.children} */}
//         </div>);
//     // return React.createElement('div', { className: 'd-flex align-items-center justify-content-start mt-1' },
//     //     React.createElement('h6', { className: 'font-weight-bold my-2', style: { marginRight: 30 } }, "$" + props.price),
//     //     React.createElement(Button, {}, "-"),
//     //     React.createElement('span', { style: { padding: '8px 14px', 'font- size': 13 } }, displayFormattedCount()),
//     //     React.createElement(Button, {}, "+"),
//     //     React.createElement('span', { className: badgeClass }, props.isAvailable ? 'Available' : 'Unavailable')
//     // )
// }
// export default ProductDetails;

import React, {useState} from 'react';
import Button from './Button';


function ProductDetails(props){
    console.log('productDetail Component executed');
    let badgeClass = 'badge-margin-left-240 badge ';
    badgeClass += props.isAvailable ? 'bg-success' : 'bg-danger'; 

    //let productCount = 0;
    let [productCount, updateCount] = useState(0)
    
    function displayFormattedProductCount(){
        return productCount > 0 ? productCount : 'Zero';
    }

    let incrementProductCount = function(){
        // productCount++;
        // console.log(productCount);
        updateCount(++productCount);
    }

    let decrementProductCount = function(){
        // productCount--;
        // console.log(productCount);
        updateCount(--productCount);
    }

    return (
        <div className="d-flex align-items-center justify-content-start mt-1">
            <h6 className="font-weight-bold my-2" style={ {marginRight: 30}}>${props.price}</h6>
            <Button eventHandler={decrementProductCount} disable={productCount === 0}>-</Button>
            <span style={ {padding: '8px 14px', fontSize: 13} }>
                {displayFormattedProductCount()}
            </span>
            <Button eventHandler={incrementProductCount}>+</Button>
            <span className={badgeClass}>{props.isAvailable ? 'Available' : 'Unavailable'}</span>
        </div>
    )

    // return React.createElement('div', {className: 'd-flex align-items-center justify-content-start mt-1'},
    //             React.createElement('h6', {className: 'font-weight-bold my-2', style: {marginRight: 30}}, "$" + props.price),
    //             React.createElement(Button, {}, "-"),
    //             React.createElement('span', {style: {padding: '8px 14px', 'font-size': 13}}, displayFormattedProductCount()),
    //             React.createElement(Button, {}, "+"),
    //             React.createElement('span', {className: badgeClass}, props.isAvailable ? 'Available' : 'Unavailable')
    //        )
}

export default ProductDetails;