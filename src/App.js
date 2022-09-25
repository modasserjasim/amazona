import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const addToCartHandle = (product) => {
    console.log('clicked', product);
    const newCart = [...cart, product];
    console.log(newCart);
    setCart(newCart);
  }
  return (

    <div>
      <Header cart={cart}></Header>
      <Shop addToCartHandle={addToCartHandle} cart={cart}></Shop>
    </div>
  );
}

export default App;
