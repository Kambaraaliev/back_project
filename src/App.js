import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./components/productList/ProductList";
import AddProducts from "./components/addProduct/AddProducts";
import EditProduct from "./components/editProduct/EditProduct";
import axios from "axios";
import Navbar from "./components/Navbar";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";

function App() {
  const API = "http://localhost:8000/products";

  const [products, setProducts] = useState([]);

  async function readProducts() {
    const { data } = await axios(API);
    setProducts(data);
  }

  async function createProduct(newProduct) {
    await axios.post(API, newProduct);
  }
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProductList readProducts={readProducts} products={products} />
            }
          />
          <Route
            path="/add"
            element={<AddProducts createProduct={createProduct} />}
          />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
