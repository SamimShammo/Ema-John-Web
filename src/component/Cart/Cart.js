import React from 'react';
import Product from '../Product/Product';
import './Cart.css'

const Cart = (props) => {
const {cart} = props;

let totalQuantity = 0;
let total = 0;
for (const product of cart) {
    console.log(product)
    if(!product.totalQuantity){
        product.totalQuantity = 1;
    }
  
    total = total + product.price * product.totalQuantity;
    totalQuantity = totalQuantity + product.totalQuantity
    
}
let shipping = 0;
for (const shippingTotal of cart) {
    shipping = shipping + shippingTotal.shipping
    
}
let beForeTax =0;
beForeTax = total + shipping

let tax = 0;
tax = (tax + shipping)*2

let allTotal = 0;
allTotal = total + shipping +tax
    return (
        <div className="cart-content">
             <h3 className="item">Items ordered: {totalQuantity}</h3>
           <div className="cartNew">
           <div className="cartName">
              <p>Items:</p>
               <p>Shipping and Handling: </p>
               <p>Total before tax:</p>
               <p>Estimated Tax: </p>
               <h2 style={{}}>Order Total: </h2>
            </div>
            <div className="">
                <p>${total.toFixed(2)}</p>
                <p>${shipping.toFixed(2)}</p>
                <p>${beForeTax.toFixed(2)}</p>
                <p>${tax.toFixed(2)}</p>
                <h2>${allTotal.toFixed(2)}</h2>
            </div>
           </div>
           <div className="button">
           <a href="/ReviewOrder" style={{ backgroundColor:' rgb(235, 170, 5)', border: '1px solid black', padding:'8px 20px', color:'black', textDecoration:'none'}} >Review your order</a>
           </div>
                   
                   
                     
        </div>
    );
};

export default Cart;