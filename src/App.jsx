import React, { useState } from 'react';
import { AiOutlineHeart, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import Carousel from './components/Carousel';
import ProductList from './components/ProductList';
import FavoriteList from './components/FavoriteList';
import Cart from './components/Cart';
import './App.css';  
import './index.css'; // Tailwind CSS styles

function App() {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const productsData = [
    {
      id: 1,
      name: "Shea Moisture Shampoo",
      description: "A moisturizing shampoo for curly hair.",
      image: "https://images.deepai.org/art-image/98b6b6a496c84985ba829ac200069b62/shampoo-for-african-american-people-make-it-creative.jpg",
      price: 12.99
    },
    {
      id: 2,
      name: "Cantu Hair Mask",
      description: "A hydrating hair mask for deep conditioning.",
      image: "https://images.deepai.org/art-image/4d0621f60bc2495b90fed6422c198ab7/hair-mask-for-african-american-people-make-it_oVi48l3.jpg",
      price: 9.99
    },
    {
      id: 3,
      name: "Carol's Daughter Leave-in Conditioner",
      description: "Leave-in conditioner to define curls.",
      image: "https://images.deepai.org/art-image/8364e57596b94cdb8ee4ea81cd712ea4/leavein-conditioner-for-african-american-peop_zXNExtg.jpg",
      price: 14.99
    },
    {
      id: 4,
      name: "Mielle Organics Scalp Oil",
      description: "Scalp oil for hair growth.",
      image: "https://images.deepai.org/art-image/5f5173aa3cd74ed29526f32f2a173e60/scalp-oil-for-african-american-people-make-it_Bw4jMdR.jpg",
      price: 19.99
    }
  ];

  // Function to toggle favorites
  const toggleFavorite = (product) => {
    if (favorites.includes(product)) {
      setFavorites(favorites.filter((item) => item.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  // Function to add products to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to remove products from cart
  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  return (
    <div className="app-container">
      {/* Main Header with Logo, Search, Cart, and User icons */}
      <header className="app-main-header fixed top-0 left-0 right-0 bg-yellow-500 text-white p-4 z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <img src="/assets/timicareslogo.png" alt="TimiCares Logo" className="logo" />
          <h1 className="text-2xl md:text-4xl font-bold">TimiCares</h1>
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative search-bar">
              <input
                type="text"
                className="rounded-lg px-4 py-2 bg-white text-black"
                placeholder="Search products..."
              />
              <AiOutlineSearch className="absolute right-2 top-2 text-gray-600" />
            </div>
            {/* Cart and User Icons */}
            <FaShoppingCart className="text-2xl cursor-pointer" />
            <AiOutlineUser className="text-2xl cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Carousel */}
      <div className="carousel-container mt-16"> {/* Margin added to account for fixed header */}
        <Carousel />
      </div>

      {/* Product List, Favorites, and Cart */}
      <div className="app-content p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 container mx-auto">
        <div className="lg:col-span-2">
          <ProductList
            products={productsData}
            toggleFavorite={toggleFavorite}
            addToCart={addToCart}
            favorites={favorites}
          />
        </div>
        <div className="space-y-6">
          <FavoriteList favorites={favorites} toggleFavorite={toggleFavorite} />
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  );
}

export default App;











