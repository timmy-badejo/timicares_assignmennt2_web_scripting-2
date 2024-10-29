import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function ProductCard({ product, toggleFavorite, addToCart, isFavorited }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
      
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>

      {/* Favorite button */}
      <button
        onClick={() => toggleFavorite(product)}
      >
        {isFavorited ? (
          <>
            <AiFillHeart/> Unfavorite
          </>
        ) : (
          <>
            <AiOutlineHeart/> Favorite
          </>
        )}
      </button>

      {/* Add to Cart button */}
      <button
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;



