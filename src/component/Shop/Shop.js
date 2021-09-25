import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import {addToDb, getStoredCart} from '../../utilities/fakedb'

const Shop = () => {
const [products, setProducts] = useState([])
const [cart, setCart] = useState([])
const [display, setDisplay] = useState([])
useEffect(() => {
    console.log('Its api call ')
    fetch('./products.JSON')
    .then(res => res.json())
    .then(data => {setProducts(data)
        console.log('Its fetch ')
        setDisplay(data)
    })
}, [])
useEffect(() => {
  if(products.length){
    const setProductCart = []
    const savedCart = getStoredCart()
    for(const key in savedCart){
        console.log(key, savedCart[key])
        const addedProduct = products.find(product => product.key === key)
     if(addedProduct){
         const quantity = savedCart[key];
         addedProduct.quantity = quantity;
         setProductCart.push(addedProduct)

    
     }        

    }
    setCart(setProductCart)
  }
}, [products])

const addToCartButton = (product) =>{
    const addCart = [...cart, product]   
    setCart(addCart)
    // save to localStorage for now 
    addToDb(product.key)

}
const searchBtn = event =>{
   const searchText = (event.target.value);
   const matchProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
   setDisplay(matchProduct)
   console.log(matchProduct.length)

}


    return (
       <>
       <div className="search-field">
           <input 
           type="text" 
           placeholder="Search Product"
           onChange={searchBtn}

           />
       </div>
        <div className="shop-container">
           <div className="product">
             {
                 display.map(product => <Product 
                    key={product.key}
                    addToCartButton={addToCartButton}
                    product={product}
                    ></Product>)
             }
           </div>
           <div className="addToCart">
               <Cart 
               cart={cart}
               ></Cart>
           </div>
        </div>
       </>
    );
};

export default Shop;