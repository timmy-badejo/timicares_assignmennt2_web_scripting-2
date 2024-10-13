import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

function FavoriteList({ favorites, toggleFavorite }) {
  return (
    <div className="favorite-list bg-gray-100 p-4 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Favorite Products</h2>

      {favorites.length === 0 ? (
        <p>No favorite products yet.</p>
      ) : (
        <ul>
          {favorites.map((product) => (
            <li key={product.id} className="p-2 border-b flex justify-between items-center">
              <div className="flex items-center">
                <AiFillHeart className="text-red-500 mr-2" />
                {product.name}
              </div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => toggleFavorite(product)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoriteList;

