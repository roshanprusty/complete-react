import './app.css';
// import './components/productlist/ProductDetails';
import ProductList from './components/productlist/ProductList.js';
import CreateProduct from './components/CreateProduct/CreateProduct';
function App() {
    // let msg = "AWESOME";
    // return (<div>
    //     <h1 className="myHeader">THIS COMPONENT IS {msg}</h1>
    //     <p className="myparagraph">THIS IS MY HEADER</p>
    //     {/* <input type="text"></input> */}
    //     </div>);


    return (
        <>
        <CreateProduct />
        <ProductList />
        </>
    ); //returning the child componet
}
export default App; 