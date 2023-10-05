import React from 'react'
import { useState } from 'react'
import "./Cart.scss"
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'

const Cart = () => {
    const exceptions = ["/login","/admin"];
    const location = useLocation()

    const [isCartOpen, setIsCartOpen] = useState(false)
    const cardProductItem = useSelector(state => state.cart.cardProduct)

    return !exceptions.includes(location.pathname) ?  (
        <>
            <div className={'cart-wrapper'}>

                <button onClick={() => setIsCartOpen(!isCartOpen)}>
                    <FiShoppingCart id="cart-icon" />
                </button>
                <div className={isCartOpen ? "cart" : "no-cart"}>
                    {
                        cardProductItem.map(i =>
                            <div className='selected-product'>
                                <div className="selected-product-wrapper">
                                    <img src={i.productImages} width={200} alt="" />
                                    <p className='title_selected_product'>{i.productMainCategory_uz}</p>
                                    <p className='price_selected_product'>{i.selectedType.price} sum</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </>
    ) : <></>
}

export default Cart
