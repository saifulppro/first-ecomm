import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // get total using for loop.
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }
    // get shipping cost
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    // get taxt
    const tax = (total / 10);
    // create NumberFormatting
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
   return (
        <div>
           <h2>Order Summary</h2>
           <h4>Item Ordered: {cart.length}</h4>
           <h5>Item Price: {total}</h5>
           <h5>Taxt + Vat: {formatNumber(tax)}</h5>
           <h5>Shipping: {shipping}</h5>
           <h5>Grand Total: {grandTotal} </h5>
        </div>
    );
};

export default Cart;