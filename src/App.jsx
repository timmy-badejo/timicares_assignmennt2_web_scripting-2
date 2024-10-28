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
    },
    {
      id: 5,
      name: "Brann Leave In Conditioner",
      description: "Leave In Conditioner.",
      image: "https://images.deepai.org/art-image/179890e5ef7e4a4cb78febd9d6ee41d7/afro-american-hair-product-d3cbae.jpg",
      price: 19.99
    },
    {
      id: 6,
      name: "Essentianls Scalp Oil",
      description: "Essetianls oil hair growth.",
      image: "https://images.deepai.org/art-image/90ef5453eaa7460192ae43c1cbf42d59/afro-american-hair-product-and-model.jpg",
      price: 19.99
    },
    {
      id: 7,
      name: "Brann Hair Growht Oil",
      description: "Deep and Nourishing",
      image: "https://images.deepai.org/art-image/d8d3e3a8d5be401f98abc5ebd7b2d5b0/afro-american-hair-product-and-model-hairstyle.jpg",
      price: 19.99
    },
    {
      id: 8,
      name: "Mielle Organics Shampoo and Oil",
      description: "Shampoo and oil for hair growth.",
      image: "https://images.deepai.org/art-image/1abdf15cf33642af862acb3f503d38ec/afro-american-hair-product-3f2679.jpg",
      price: 19.99
    },
    {
      id: 9,
      name: "Beard product",
      description: "Beard hair oils.",
      image: "https://images.deepai.org/art-image/ed081aaa7414466494faa5f811c6be25/afro-american-male-model-hair-product.jpg",
      price: 19.99
    },
    {
      id: 10,
      name: "Afro-america styling hair with hair care product",
      description: "Scalp oil for hair growth.",
      image: "https://images.deepai.org/art-image/2d447e0a72ec4539b4dcf214bf359a37/afro-america-styling-hair-with-hair-care-product.jpg",
      price: 19.99
    },
    {
      id: 11,
      name: "Hair Style Gel",
      description: "Brann hair style.",
      image: "https://images.deepai.org/art-image/c57d45a6cd494af98661db9f036184bd/afro-american-hair-product-and-hair-care-with_lycAMj7.jpg",
      price: 19.99
    },
    {
      id: 12,
      name: "Beautiful Hair Glow",
      description: "Scalp oil for hair growth.",
      image: "https://images.deepai.org/art-image/1aec867984dc4ecfa9b48f5e71a496ba/afro-american-hair-product-and-hair-care-with_qc0Ij2z.jpg",
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











