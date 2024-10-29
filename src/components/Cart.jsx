import React from "react";

function Cart({ cart, removeFromCart }) {
  const totalPrice = cart.reduce((sum, product) => sum + (product.price || 0), 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                <span>{product.name}</span>
                <span>${product.price.toFixed(2)}</span>
                <button onClick={() => removeFromCart(product)}>Remove</button>
              </li>
            ))}
          </ul>
          <div>Total: ${totalPrice.toFixed(2)}</div>
        </>
      )}
    </div>
  );
}

export default Cart;

