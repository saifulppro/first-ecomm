import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './product.css';

const Product = (props) => {
    const {img, name, seller, stock} = props.product;
    // console.log(props)
    return (
        <div className="product-header">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-desc">
                <h3>{name}</h3>
                <br />
                <p>seller: {seller}</p>
                <br />
                <p>only {stock} in stock, order soon.</p>
                <br />
                <button className="main-btn" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
        </div>
    );
};

export default Product;