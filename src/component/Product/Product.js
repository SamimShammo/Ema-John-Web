import React from 'react';
import Rating from 'react-rating';
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    const {name, img, category, price, seller, shipping, star, stock} = props.product
    return (
        <div className="product-container">
            <div className="prodcut-img">
                <img src={img} alt="" />
            </div>
            <div className="product-content">
               <h3>{name}</h3>
               <p>By: {seller}</p>
               <h4>Price: ${price}</h4>
               <p>only {stock} left in stock - order soon</p>
               <Rating style={{color: 'yellow'}}
                 emptySymbol="far fa-star"
                 fullSymbol="fas fa-star"
                 initialRating={star}
                 readonly >
                 
               </Rating> 
               <br />
               <br />
               <a className="Add-To-Cart" onClick={() => props.addToCartButton(props.product)}><i class="fas fa-shopping-cart"></i>Add To Cart</a>

            </div>
        </div>
    );
};

export default Product;