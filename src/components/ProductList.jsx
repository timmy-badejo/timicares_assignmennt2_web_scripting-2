import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, toggleFavorite, addToCart, favorites }) => {
  return (
    <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <MemoizedProductCard
          key={product.id}
          product={product}
          toggleFavorite={toggleFavorite}
          addToCart={addToCart}
          isFavorited={favorites.includes(product)}
        />
      ))}
    </div>
  );
};

// Memoized ProductCard to prevent unnecessary re-renders
const MemoizedProductCard = React.memo(ProductCard);

export default ProductList;

