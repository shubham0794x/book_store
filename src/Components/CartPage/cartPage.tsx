import React, { useContext } from 'react';
import ShopContext from './../../ContextStore/context'
import starImage from './../../Asserts/star.png'

import './cartPage.scss'
const Cart = () => {
    const context = useContext(ShopContext);
    const removeProductFromCart: any = context.removeProductFromCart;
    let cart: any = context.cart;
    let totalPrice: number = 0;
    let sizeOfCart: boolean = cart.length && cart.length > 0 ? true : false;


    


export default Cart;

