import { useState } from 'react';
import Products from './Products';



function ProductList(props){
    //console.log(props.newProduct);
    //if(props.newProductList.length === 0) return <h3>No products available!</h3>
    return props.newProductList.length === 0 ? <h3>No products available!</h3> :
    (  <ul className="list-group shadow">
                    {
                        props.newProductList.map((product) => {
                            
                            return <Products 
                            // initially when the page loads this new product object will be null and on that null we are trying to access this pid property this pname property this description property etc and that's why we have this rror here in the console so we can fix this by using nullis equalizing operator
                                key={product?.pID}
                                id={product?.pID} 
                                name={product?.pName}
                                description={product?.desc}
                                isAvailable={product?.isAvailable}
                                imageUrl={product?.image}
                                price={product?.price}>
                            </Products>
                        })
                    }
                </ul>);
}

export default ProductList;