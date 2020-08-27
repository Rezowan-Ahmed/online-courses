import React, { useState } from 'react';
import './Cart.css'
const Cart = (props) => {
    return (
        <div className="cart-container">
            <h3 className="order-list">Order List</h3>
            <h4 className="total-order">Total Order : {props.enroll.length}</h4>
        {
            props.enroll.map(course=>{
                const {title,img,price}=course;
                return(
                    <div className="added-cart">

                        <div className="cart-summery">
                            <h5>{title}</h5>
                            <h4 className="cart-price">Price: ${price}</h4>
                        </div>
                        <div>
                            <img src={img} alt=""/>
                        </div>
                    </div>
                )
            })
        }
        <h4 className="total-price">Total Price : ${props.totalCost}</h4>
        <button className="btn btn-success" style={{margin:'30px'}}>Review</button>
        </div>
    );
};

export default Cart;