import './App.css';
import NavBar from './NavBar';
import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  const [products] = useState([
    { id: 1, name: 'Ashwagandha', price: 10.99 },
    { id: 2, name: 'Triphala', price: 15.99 },
    { id: 3, name: 'Brahmi', price: 12.99 },
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeFromCart = (index) => {
    setCart(cart.filter((item, i) => i !== index));
  };
  return (
    <div className="App">
      <NavBar></NavBar>
    <div className="content">
        <ProductList products={products} addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default App;
