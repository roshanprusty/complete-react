import React, { useState } from 'react';

function List(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const product = { name, description, price, image };
    props.onSubmit(product);
    setName('');
    setDescription('');
    setPrice('');
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
      </div>
      {/* <div>
        <label>Image:</label>
        <input type="text" value={image} onChange={(event) => setImage(event.target.value)} />
      </div> */}
      <button type="submit">Add Product</button>
    </form>
    
    </>
  );
}
export default List;
