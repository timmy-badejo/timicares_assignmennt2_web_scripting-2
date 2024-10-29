import React from "react";
import { AiFillHeart } from "react-icons/ai";

function FavoriteList({ favorites, toggleFavorite }) {
  return (
    <div className="favorite-list">
      <h2>Favorite Products</h2>
      {favorites.length === 0 ? (
        <p>No favorite products yet.</p>
      ) : (
        <ul>
          {favorites.map((product) => (
            <li key={product.id}>
              <div>
                <AiFillHeart/>
                {product.name}
              </div>
              <button onClick={() => toggleFavorite(product)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoriteList;


