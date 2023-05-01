import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";

function Combine() {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <>
      <Form onAdd={handleAddItem} />
      <Table items={items} />
    </>);
}
export default Combine;
