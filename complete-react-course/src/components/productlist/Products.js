// import ProductDetails from "./ProductDetails";


// // let imgUrl = ('https://whytefarms.com/trialoffer/wp-content/uploads/2021/05/milk-glass-bottle-1-scaled-e1642281161529.jpg');

// // let isAvailable = "Available"
// // let badgeClass = "badge-margin-left-40 badge "
// // badgeClass += isAvailable === "Available" ? "bg-success" : "bg-danger";

// function Products(props) {
//     return (<li class="list-group-item">
//             <div class="media align-items-lg-center flex-column flex-lg-row p-3 d-flex"> <div class="media-body order-2 order-1g-1">
//                 <h5 class="mt-0 font-weight-bold mb-2">{props.name}</h5> <p class="font-italic text-muted mb-0 small">{props.description}</p>
//                 <ProductDetails price={props.price} isAvailable={props.isAvailable}>
//                     {/* <p>This is just a demo</p> */}
//                 </ProductDetails>
//             </div><img src={props.image} alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-1g-2"/></div>
//         </li>
//     );
// };
// export default Products;

import React from 'react';
import ProductDetails from './ProductDetails';


//let imageUrl = require("../images/fresh-milk.png");
//let isAvailable = 'Available';


// let style = {
//     padding: '0px 20px',
//     'font-size': 14
// }



function Products(props){
    console.log('products Component executed');

    return (
                <li className="list-group-item" style={{backgroundColor: props.isAvailable ? 'white' : '#dedede'}}>
                <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
                    <div className="media-body order-2 order-lg-1">
                        <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
                        <p className="font-italic text-muted mb-0 small">{props.description}</p>
                        <ProductDetails price={props.price} isAvailable={props.isAvailable}>
                        </ProductDetails>
                    </div>
                    <img src={(props.imageUrl)} alt="Generic placeholder image" width="100" className="ml-lg-5 order-1 order-lg-2" />
                </div>
                </li>
            )
}

export default Products;