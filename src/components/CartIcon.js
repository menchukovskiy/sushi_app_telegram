import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';



const CartIcon = () => {
    const cart = useSelector(state => state.cart);

    return (
        <div className='cartIcon'>
            <Badge badgeContent={cart.count} color="secondary">
                <ShoppingCartIcon />
            </Badge>
        </div>
    );
};

export default CartIcon;