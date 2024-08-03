import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../features/products/productsSlice";
import { Button, TextField } from "@mui/material";

const EditProductForm = ({ product, onCancel }) => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState(product.product_name);
  const [category, setCategory] = useState(product.category);
  const [price, setPrice] = useState(product.price);
  const [discount, setDiscount] = useState(product.discount);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      id: product.id,
      product_name: productName,
      category,
      price: parseFloat(price),
      discount: discount ? parseFloat(discount) : null,
    };
    dispatch(updateProduct(updatedProduct));
    onCancel(); // call onCancel to close the edit form
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
      <Button variant="contained" color="primary" type="submit">Save Changes</Button>
      <Button variant="contained" color="secondary" type="button" onClick={onCancel}>
        Cancel
      </Button>
    </form>
  );
};

export default EditProductForm;
