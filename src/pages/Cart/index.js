import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { addCart, editCart } from '../../store/slice/cartSlice'
import { useNavigate  } from 'react-router-dom'
import TopBar from '../../components/TopBar';

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const products = useSelector(state => state.product.products)
    const dispatch = useDispatch()
    const history = useNavigate()
    let totalPrice = 0

    const handleAdd = (id) => {
        dispatch(addCart(id))
    }

    const handleMin = (id) => {
        dispatch(editCart(id))
    }

    return (
        <div className='wrapForBar'>
            <TopBar text="Ваш кошик" />

            {
                cart.count ?
                    <Box>
                        {cart.data.map(item => {
                            const product = products.find(pr => pr.id == item.id)
                            const price = item.count * product.price
                            totalPrice += price
                            return (
                                <Box key={product.id} display="flex" alignItems="center" justifyContent="space-between" className="rowCart">
                                    <Box className="rowCart_cover">
                                        <img src={'https://blackdniprosushi.dp.ua/images/' + product.cover} />
                                    </Box>
                                    <Box className="rowCart_about">
                                        {product.name}
                                    </Box>
                                    <Box display="flex" alignItems="center" className="rowCart_count">

                                        <IconButton onClick={() => handleMin(product.id)} aria-label="delete" size="small">
                                            <RemoveCircleIcon className='white' fontSize="inherit" />
                                        </IconButton>

                                        <Box className="cartCountText">{item.count}</Box>

                                        <IconButton onClick={() => handleAdd(product.id)} aria-label="delete" size="small">
                                            <AddCircleIcon className='white' fontSize="inherit" />
                                        </IconButton>

                                    </Box>
                                    <Box className="rowCart_price">
                                        {price} грн
                                    </Box>
                                </Box>
                            )

                        }

                        )}
                        <Box className="totalPrice" display="flex" justifyContent="space-between" alignItems="center">
                            <Box>До сплати:</Box>
                            <Box className="totalPrice_price">{totalPrice} грн</Box>
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center" className="cartBoxBtn">
                            <Button onClick={ ()=> history('offer') } className='btnActive' variant="contained">Оформити замовлення</Button>
                        </Box>
                    </Box>

                    :
                    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" className="emptyCart">
                        <Typography>Треба щось обрати</Typography>
                    </Box>
            }

        </div>
    );
};

export default Cart;