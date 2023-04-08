import React from 'react';

const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div>
          <h2>Order Summary : {cart.length}</h2> 
          {
            cart.map(tShirt => <p
            key={tShirt._id}>{tShirt.name}
                <button onClick={() =>handleRemoveFromCart(tShirt._id)}>X</button>
            </p>)
          } 
        </div>
    );
};

export default Cart;