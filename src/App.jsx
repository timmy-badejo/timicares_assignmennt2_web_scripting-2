import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import Carousel from './Carousel'; // Importing the Carousel component
import './App.css'; // Assuming you have some custom styles here.

function App() {
  const [favorites, setFavorites] = useState([]);

  // Product data with artwork URLs for images
  const productsData = [
    {
      id: 1,
      name: "Shea Moisture Shampoo",
      description: "A moisturizing shampoo for curly hair.",
      image: "https://images.deepai.org/art-image/98b6b6a496c84985ba829ac200069b62/shampoo-for-african-american-people-make-it-creative.jpg"
    },
    {
      id: 2,
      name: "Cantu Hair Mask",
      description: "A hydrating hair mask for deep conditioning.",
      image: "https://images.deepai.org/art-image/4d0621f60bc2495b90fed6422c198ab7/hair-mask-for-african-american-people-make-it_oVi48l3.jpg"
    },
    {
      id: 3,
      name: "Carol's Daughter Leave-in Conditioner",
      description: "Leave-in conditioner to define curls.",
      image: "https://images.deepai.org/art-image/8364e57596b94cdb8ee4ea81cd712ea4/leavein-conditioner-for-african-american-peop_zXNExtg.jpg"
    },
    {
      id: 4,
      name: "Mielle Organics Scalp Oil",
      description: "Scalp oil for hair growth.",
      image: "https://images.deepai.org/art-image/5f5173aa3cd74ed29526f32f2a173e60/scalp-oil-for-african-american-people-make-it_Bw4jMdR.jpg"
    }
  ];

  // Function to toggle products as favorites
  const toggleFavorite = (product) => {
    if (favorites.includes(product)) {
      setFavorites(favorites.filter((item) => item !== product));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  return (
    <div className="App">
      {/* Carousel for images */}
      <header className="App-header">
        <Carousel />
      </header>
      
      {/* Header with Cart, Search, and User icons */}
      <header className="flex justify-between items-center bg-yellow-500 text-white p-6">
        <img src="./assets/timicareslogo.png" alt="TimiCares Logo" className="h-10 mr-4" />
        <h1 className="text-4xl font-bold">TimiCares</h1>
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              className="rounded-lg px-4 py-2 bg-white text-black"
              placeholder="Search products..."
            />
            <AiOutlineSearch className="absolute right-2 top-2 text-gray-600" />
          </div>
          {/* Cart Icon */}
          <FaShoppingCart className="text-2xl cursor-pointer" />
          {/* User Icon */}
          <AiOutlineUser className="text-2xl cursor-pointer" />
        </div>
      </header>

      {/* Product List and Favorite List */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProductList products={productsData} toggleFavorite={toggleFavorite} />
        <FavoriteList favorites={favorites} />
      </div>
    </div>
  );
}

// ProductList Component (Displays the list of products)
function ProductList({ products, toggleFavorite }) {
  return (
    <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

// ProductCard Component (Individual product card with icons)
function ProductCard({ product, toggleFavorite }) {
  return (
    <div className="product-card border rounded-lg shadow-lg p-4">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.description}</p>
      <button
        onClick={() => toggleFavorite(product)}
        className="flex items-center bg-yellow-500 text-white px-4 py-2 mt-4 rounded hover:bg-yellow-600"
      >
        {favorites.includes(product) ? (
          <>
            <AiFillHeart className="mr-2" /> Unfavorite
          </>
        ) : (
          <>
            <AiOutlineHeart className="mr-2" /> Favorite
          </>
        )}
      </button>
    </div>
  );
}

// FavoriteList Component (Displays the favorite products with icons)
function FavoriteList({ favorites }) {
  return (
    <div className="favorite-list bg-gray-100 p-4 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Favorite Products</h2>
      {favorites.length === 0 ? (
        <p>No favorite products yet.</p>
      ) : (
        <ul>
          {favorites.map((product) => (
            <li key={product.id} className="p-2 border-b flex items-center">
              <AiFillHeart className="text-red-500 mr-2" /> {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
