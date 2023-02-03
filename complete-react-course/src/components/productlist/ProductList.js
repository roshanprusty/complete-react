import Products from './Products';

const products = [
    {
        pID: 1,
        pName: 'Tomato',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: ("https://static.vecteezy.com/system/resources/previews/009/456/958/original/simple-single-cute-carrot-healthy-food-vitamins-vegetables-illustration-in-flat-style-vector.jpg"),
        price: 12
    },
    {
        pID: 2,
        pName: 'Brocoli',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: false,
        image: ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBfYafYtNlcdxe9OLiga_CKDDf0czgSImbcg&usqp=CAU"),
        price: 10
    },
    {
        pID: 3,
        pName: 'Brinjal',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: ("https://static.vecteezy.com/system/resources/previews/009/456/850/original/simple-single-cute-eggplant-healthy-food-vitamins-vegetables-illustration-in-flat-style-vector.jpg"),
        price: 15
    },
    {
        pID: 4,
        pName: 'Carrot',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: ("https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-vegetable-yellow-carrot-illustration-image_1244469.jpg"),
        price: 20
    },
    
];
function ProductDetails() {
    return (<div className='row'>
        <div className='col-lg-8 mx-auto'>
            <ul class="list-group shadow">

                <Products id={products[0].pID} name={products[0].pName} descripton={products[0].descripton} isAvailable={products[0].isAvailable} image={products[0].image} price={products[0].price} />
                <Products id={products[1].pID} name={products[1].pName} descripton={products[1].descripton} isAvailable={products[1].isAvailable} image={products[1].image} price={products[1].price} />
                <Products id={products[2].pID} name={products[2].pName} descripton={products[2].descripton} isAvailable={products[2].isAvailable} image={products[2].image} price={products[2].price} />
                <Products id={products[3].pID} name={products[3].pName} descripton={products[3].descripton} isAvailable={products[3].isAvailable} image={products[3].image} price={products[3].price} />
                <Products id={products[4].pID} name={products[4].pName} descripton={products[4].descripton} isAvailable={products[4].isAvailable} image={products[4].image} price={products[4].price} />
            </ul>
        </div>
    </div>);
}
export default ProductDetails;