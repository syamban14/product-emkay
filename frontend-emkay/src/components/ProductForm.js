import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/products/productsSlice";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      product_name: productName,
      category,
      price: parseFloat(price),
      discount: discount ? parseFloat(discount) : null,
    };
    dispatch(addProduct(newProduct));
    setProductName("");
    setCategory("");
    setPrice("");
    setDiscount("");

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          label="Product Name"
          variant="outlined"
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>
      <div>
        <TextField
          label="Category"
          variant="outlined"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div>
        <TextField
          label="Price"
          variant="outlined"
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <TextField
          label="Discount"
          variant="outlined"
          type="number"
          step="0.01"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
      </div>
      <Button variant="contained" color="primary" type="submit">
        Add Product
      </Button>
      <Button variant="contained" color="secondary" onClick={() => navigate("/")}>
        Cancel
      </Button>
    </form>
  );
};

export default ProductForm;
