import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const CartIcon = () => {
    const cart = useSelector(state => state.cart);
    
    return (
        <div className='cartIcon'>
            { cart.count ? <div className='cartIcon_count'>{cart.count}</div> : null }
            <ShoppingCartIcon />
        </div>
    );
};

export default CartIcon;