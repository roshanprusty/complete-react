// import React, { useState } from 'react';
// function ProductForm(props) {
//     function nameChangeHandler(event) {
//         // we are using this spread operator on this user input object it is going to expand the properties of this user input object into individual properties and those individual properties are again wrapped within these curly braces so it will become a property of this object okay so this spread operator simply takes an object pulls out all the key value pair from that object and adds them to this new object that means we are going to have these five properties for this object and after that we are also overriding
//         // updateUserInput((prevState)=>{
//         //     return{...prevState, pName:event.target.value};
//         // });
//         updateName(event.target.value);
//     }
//     function priceChangeHandler(event) {
//         // updateUserInput({...userInput,pPrice:event.target.value});
//         updatePrice(event.target.value);
//     }
//     function descriptionChangeHandler(event) {
//         // updateUserInput({...userInput,pDescription:event.target.value});
//         updateDescription(event.target.value);
//     }
//     function availableChangeHandler(event) {
//         // updateUserInput({...userInput,pAvailable:event.target.value});
//         updateAvailable(event.target.checked);
//     }
//     function imageChangeHandler(event) {
//         // updateUserInput({...userInput,pImageUrl:event.target.value});
//         updateImage(event.target.value)
//     }

//     function createProductEventHandler(event) {
//         event.preventDefault();
//         let product = {
//             pID: 1,
//             pName: pName,
//             desc: pDescription,
//             isAvailable: Boolean(pAvailable),
//             image: pImage,
//             price: Number(pPrice)
//         }
//         console.log(product);
//     }


//     return (<>
//         <form className="row g-3" onSubmit={createProductEventHandler}>
//             <div className="col-md-6">
//                 <label for="name">Product Name</label>
//                 <input type="text"
//                     className="form-control"
//                     id="name"
//                     placeholder="Product Name"
//                     onChange={nameChangeHandler} />
//             </div>
//             <div className="col-md-6">
//                 <label for="price">Product Price</label>
//                 <input type="number"
//                     min="0.01" step="0.01"
//                     className="form-control"
//                     id="price"
//                     placeholder="Product Price"
//                     onChange={priceChangeHandler} />
//             </div>

//             <div className="form-group">
//                 <label for="description">Product Description</label>
//                 <input type="text"
//                     className="form-control"
//                     id="description"
//                     placeholder="Product Description"
//                     onChange={descriptionChangeHandler} />
//             </div>

//             <div class="form-check form-switch">
//                 <input class="form-check-input" type="checkbox" role="switch" id="isAvailable"
//                     onChange={availableChangeHandler} />
//                 <label class="form-check-label" for="isAvailable">Is product available in stock?</label>
//             </div>

//             <div className="form-group">
//                 <label for="select-image">Select product image</label>
//                 <input type="file" className="form-control" id="select-image" onChange={imageChangeHandler} />
//             </div>


//             <button type="submit" className="btn btn-primary">Add Product</button>
//         </form>
//     </>
//     );
// }
// export default ProductForm;

import React, {useState} from 'react';

function ProductForm(props){
    let[pName, updateName] = useState('');
    let[pPrice, updatePrice] = useState('');
    let[pDescription, updateDescription] = useState('');
    let[pAvailable, updateAvailability] = useState(false);
    let[pImageUrl, updateImageUrl] = useState('');

    // let[userInput, updateUserInput] = useState({
    //     pName: '',
    //     pPrice: '',
    //     pDescription: '',
    //     pAvailable: '',
    //     pImageUrl: ''
    // });


    function nameInputHandler(event){
        updateName(event.target.value);
        // updateUserInput({
        //     ...userInput,
        //     pName: event.target.value
        // })

        // updateUserInput((prevState) => {
        //     return {...prevState, pName: event.target.value}
        // })
    }

    function priceInputHandler(event){
        updatePrice(event.target.value);
        // updateUserInput({
        //     ...userInput,
        //     pPrice: event.target.value
        // })
    }

    function descriptionInputHandler(event){
        updateDescription(event.target.value);
        // updateUserInput({
        //     ...userInput,
        //     pDescription: event.target.value
        // })
    }

    function availabilityInputHandler(event){
        updateAvailability(event.target.checked);
        // updateUserInput({
        //     ...userInput,
        //     pAvailable: event.target.value
        // })
    }

    function imageInputHandler(event){
        updateImageUrl(event.target.value);
        // updateUserInput({
        //     ...userInput,
        //     pImageUrl: event.target.value
        // })
    }

    function createProductEventHandler(event){
        event.preventDefault();
        let product = {
            pName: pName,
            desc: pDescription,
            isAvailable: Boolean(pAvailable),
            image: pImageUrl,
            price: Number(pPrice)
        }

        updateName('');
        updatePrice('');
        updateDescription('')
        updateAvailability(false);
        updateImageUrl('')

        //console.log(product);
        props.createProduct(product);
        props.onCancel();
    }

    return (
        <form className="row g-3" onSubmit={createProductEventHandler}>
        <div className="col-md-6">
            <label for="name">Product Name</label>
            <input type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Product Name"
                    value={pName}
                    onChange={nameInputHandler} />
        </div>
        <div className="col-md-6">
            <label for="price">Product Price</label>
            <input type="number" 
                    min="0.01" step="0.01" 
                    className="form-control" 
                    id="price" 
                    placeholder="Product Price"
                    value={pPrice}
                    onChange={priceInputHandler} />
        </div>

        <div className="form-group">
            <label for="description">Product Description</label>
            <input type="text" 
                    className="form-control" 
                    id="description" 
                    placeholder="Product Description"
                    value={pDescription}
                    onChange={descriptionInputHandler} />
        </div>
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="isAvailable"
            checked={pAvailable}
            onChange={availabilityInputHandler} />
            <label class="form-check-label" for="isAvailable">Is product available in stock?</label>
        </div>

        <div className="form-group">
            <label for="select-image">Select product image</label>
            <input type="file" className="form-control" id="select-image" value={pImageUrl}
            onChange={imageInputHandler} />
        </div>
        

        <button type="submit" className="btn btn-primary">Add Product</button>
        <button type="button" onClick={props.onCancel}>Cancel</button>
    </form>
    );
}

export default ProductForm;