import React from 'react'
import { useState } from 'react'
import "./Cart.scss"
import { FiShoppingCart } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const Cart = () => {
    const [isCartOpen, setIsCartOpen] = useState(false)

    // btn.onClick(() => {

    // })
    return (
        <>
            {/* <button className='cart-main-btn' onClick={() => setIsCartOpen(!isCartOpen)}>
                <FiShoppingCart id="cart-icon" />
                <FiX id="close-icon" />
            </button> */}
            <div className={'cart-wrapper'}>
                <button onClick={() => setIsCartOpen(!isCartOpen )}>
                    <FiShoppingCart id="cart-icon"/>
                    {/* <FiX id="close-icon"/> */}
                </button>
                <div className={isCartOpen ? "cart" : "no-cart"}></div>
            </div>

        </>
    )
}

export default Cart
