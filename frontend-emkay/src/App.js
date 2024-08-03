import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, CssBaseline, Paper, Typography } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import EditProductForm from "./components/EditProductForm";

function App() {
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h4" align="center">
          Aplikasi CRUD EMKAY
        </Typography>
        <Router>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<ProductForm />} />
            <Route path="/edit/:id" element={<EditProductForm />} />
          </Routes>
        </Router>
      </Paper>
    </Container>
  );
}

const AppWithProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWithProvider;
