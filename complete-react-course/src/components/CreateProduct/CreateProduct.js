import ProductForm from "./ProductForm";
function CreateProduct(){
    function onCreateProduct(product){
        console.log(product);
    }
    return(<div className="row">
        <div className="col-lg-8 mx-auto" style={{backgroundColor: 'white', padding: '10px 20px', marginBottom:20 }}>
            <ProductForm CreateProduct={onCreateProduct} />
        </div>
    </div>

    )
}
export default CreateProduct;