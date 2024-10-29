import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { FaShoppingCart, FaRegGem, FaBrush, FaBroom, FaCogs, FaBolt, FaFan, FaFire, FaWater, FaLeaf, FaSpa, FaTint, FaCut } from "react-icons/fa";
import Carousel from "./components/Carousel";
import ProductList from "./components/ProductList";
import FavoriteList from "./components/FavoriteList";
import Cart from "./components/Cart";
import "./App.css";
import "/src/index.css";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  // Full productsData array with each product detailed.
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
      name: "Essentials Scalp Oil",
      description: "Essentials oil for hair growth.",
      image: "https://images.deepai.org/art-image/90ef5453eaa7460192ae43c1cbf42d59/afro-american-hair-product-and-model.jpg",
      price: 19.99
    },
    {
      id: 7,
      name: "Brann Hair Growth Oil",
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
      name: "Beard Product",
      description: "Beard hair oils.",
      image: "https://images.deepai.org/art-image/ed081aaa7414466494faa5f811c6be25/afro-american-male-model-hair-product.jpg",
      price: 19.99
    },
    {
      id: 10,
      name: "Styling Hair with Hair Care Product",
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

  const toggleFavorite = (product) => {
    if (favorites.includes(product)) {
      setFavorites(favorites.filter((item) => item.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (product) => setCart(cart.filter(item => item.id !== product.id));

  const icons = [
    { icon: <FaRegGem />, name: "Shine Serum" },
    { icon: <FaBrush />, name: "Hair Brush" },
    { icon: <FaCut />, name: "Scissors" },
    { icon: <FaBroom />, name: "Dry Shampoo" },
    { icon: <FaCogs />, name: "Styling Gel" },
    { icon: <FaBolt />, name: "Hair Spray" },
    { icon: <FaFan />, name: "Blow Dryer" },
    { icon: <FaFire />, name: "Heat Protectant" },
    { icon: <FaWater />, name: "Moisture Spray" },
    { icon: <FaLeaf />, name: "Herbal Oil" },
    { icon: <FaSpa />, name: "Conditioner" },
    { icon: <FaTint />, name: "Hair Dye" }
  ];

  return (
    <div className="app-container">
      <header className="app-main-header">
        <div>
          <img src="src/assets/timicareslogo.png" alt="TimiCares Logo" className="logo" />
          <h1 class ="header">TimiCares</h1>
          <div>
            <div className="search-bar">
              <input type="text"placeholder="Search products..." />
              <AiOutlineSearch/>
            </div>
          </div>
          <div className="header-icon">
            <FaShoppingCart/>
            <AiOutlineUser/>
          </div>  
        </div>
      </header>

      <div className="carousel-container">
        <Carousel />
      </div>

      <div className="icons-container">
        {icons.map((item, index) => (
          <div className="icon-box" key={index}>
            <div className="icon">{item.icon}</div>
            <p className="icon-name">{item.name}</p>
          </div>
        ))}
      </div>

      <div>
        <div>
          <ProductList products={productsData} toggleFavorite={toggleFavorite} addToCart={addToCart} favorites={favorites} />
        </div>
        <div>
          <FavoriteList favorites={favorites} toggleFavorite={toggleFavorite} />
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  );
}

export default App;


