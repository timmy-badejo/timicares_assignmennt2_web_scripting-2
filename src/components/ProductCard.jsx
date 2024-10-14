import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';



function ProductCard({ product, toggleFavorite, addToCart, isFavorited }) {
  return (
    <div className="product-card border rounded-lg shadow-lg p-4">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.description}</p>
      <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>

      {/* Favorite button */}
      <button
        onClick={() => toggleFavorite(product)}
        className={`flex items-center px-4 py-2 mt-4 rounded ${isFavorited ? 'bg-red-500 hover:bg-red-600' : 'bg-yellow-500 hover:bg-yellow-600'} text-white`}
      >
        {isFavorited ? (
          <>
            <AiFillHeart className="mr-2" /> Unfavorite
          </>
        ) : (
          <>
            <AiOutlineHeart className="mr-2" /> Favorite
          </>
        )}
      </button>

      {/* Add to Cart button */}
      <button
        onClick={() => addToCart(product)}
        className="flex items-center bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;


