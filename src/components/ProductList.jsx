import React from 'react';

import ProductCard from './ProductCard';

function ProductList({ products, toggleFavorite, addToCart, favorites }) {
  return (
    <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          toggleFavorite={toggleFavorite}
          addToCart={addToCart}
          isFavorited={favorites.includes(product)}
        />
      ))}
    </div>
  );
}

export default ProductList;

