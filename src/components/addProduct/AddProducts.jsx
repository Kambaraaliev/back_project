import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProducts = ({ createProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [des, setDes] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  function handleAddProduct() {
    if (!title || !price || !des || !image) {
      alert("заполните всe поля!!!!");
      return;
    }
    let newProduct = {
      title,
      price,
      des,
      image,
    };

    createProduct(newProduct);
    setTitle("");
    setDes("");
    setPrice("");
    setImage("");
    navigate("/");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={des}
        onChange={(e) => setDes(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button onClick={handleAddProduct}>Add product</Button>
    </div>
  );
};

export default AddProducts;
