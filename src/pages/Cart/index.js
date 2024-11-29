import React from 'react';
import { Box, Typography, Button, AppBar, Toolbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';



const Cart = () => {
    const cart = useSelector(state => state.cart)
    const products = useSelector(state => state.product.products)
    let totalPrice = 0

    return (
        <div className='wrapForBar'>
            <AppBar className='header' position="fixed">
                <Toolbar>
                    <Typography className='title' variant="h6" gutterBottom>Ваш кошик</Typography>
                </Toolbar>

            </AppBar>

            {
                cart.count ?
                    <Box>
                        {cart.data.map(item => {
                            const product = products.find(pr => pr.id == item.id)
                            const price = item.count * product.price
                            totalPrice += price
                            return (
                                <Box display="flex" alignItems="center" justifyContent="space-between" className="rowCart">
                                    <Box className="rowCart_cover">
                                        <img src={'https://blackdniprosushi.dp.ua/images/' + product.cover} />
                                    </Box>
                                    <Box className="rowCart_about">
                                        {product.name}
                                    </Box>
                                    <Box className="rowCart_count">
                                        
                                        {item.count}
                                    </Box>
                                    <Box className="rowCart_price">
                                        {price} грн
                                    </Box>
                                </Box>
                            )

                        }

                        )}
                    </Box>
                    :
                    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" className="emptyCart">
                        <Typography>Треба щось обрати</Typography>
                    </Box>
            }
            <Box className="totalPrice" display="flex" justifyContent="space-between" alignItems="center">
                <Box>До сплати:</Box>
                <Box className="totalPrice_price">{totalPrice} грн</Box>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" className="cartBoxBtn">
                <Button className='btnActive' variant="contained">Оформити замовлення</Button>
            </Box>
        </div>
    );
};

export default Cart;