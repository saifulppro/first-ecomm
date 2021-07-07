import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../product/Product/Product';
import Cart from '../cart/Cart';

const Shop = () => {
    console.log(fakeData);
    const first10 = fakeData.slice(0,10);
    const [products, setProduct] = useState(first10)
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>{
        console.log('product added', product)
        const  newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Product 
                        handleAddProduct = {handleAddProduct}
                        product={pd}>
                        </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>

    );
};

export default Shop;