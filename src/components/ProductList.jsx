import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, toggleFavorite, addToCart, favorites }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          toggleFavorite={toggleFavorite}
          addToCart={addToCart}
          isFavorited={favorites.includes(product)}  // Boolean to indicate if the product is a favorite
        />
      ))}
    </div>
  );
};

export default ProductList;




