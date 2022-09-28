import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://i0.wp.com/harga.web.id/wp-content/uploads/biskuit-regal.jpg?fit=680%2C300&ssl=1',
      name: 'Biskuit',
      category: 'Makanan',
      price: 6000
    },
    {
      url: 'https://assets3.thrillist.com/v1/image/1288649/414x310/crop;webp=auto;jpeg_quality=60;progressive.jpg',
      name: 'Chips',
      category: 'Snack',
      price: 8000
    },
    {
      url: 'https://cdn-2.tstatic.net/tribunnews/foto/bank/images/varian-oreo.jpg',
      name: 'Oreo',
      category: 'Snack',
      price: 10000
    },
    {
      url: 'https://www.mainmain.id/uploads/post/2022/08/18/Luxcrime%20Tango%20Wafer%20Face%20Pallette%20Lip%20Tint%20Cream%20Foundation%20mainmain.id.jpg',
      name: 'Tango',
      category: 'Makanan',
      price: 12000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6bV_yY3fE9qoUZdnFooDY0Q4aY77uDn3Cdpmgyq71RfZ5FoyXIcbf7wcK5kMYHZrTF6c&usqp=CAU',
      name: 'Cokelat',
      category: 'Snack',
      price: 15000
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;