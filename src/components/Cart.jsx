import React from 'react';

function Cart({ cart, removeFromCart }) {
  // Calculate the total number of items in the cart
  const totalItems = cart.length;

  // Calculate the total price if products have a price attribute
  const totalPrice = cart.reduce((sum, product) => sum + (product.price || 0), 0);

  return (
    <div className="cart bg-gray-100 p-4 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {/* If the cart is empty */}
      {totalItems === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((product, index) => (
              <li key={index} className="p-2 border-b flex justify-between items-center">
                <span>{product.name}</span>
                <span>${product.price ? product.price.toFixed(2) : 'N/A'}</span>
                {/* Remove from cart button */}
                <button
                  className="ml-4 px-2 py-1 text-sm text-red-500 border rounded hover:bg-red-500 hover:text-white"
                  onClick={() => removeFromCart(product)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Display total price if applicable */}
          {totalPrice > 0 && (
            <div className="mt-4 text-lg font-bold">
              <p>Total: ${totalPrice.toFixed(2)}</p>
            </div>
          )}

          {/* Checkout button */}
          <div className="mt-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
