import React from 'react';
import TopBar from '../../components/TopBar';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography} from '@mui/material';
import BoxProduct from "../../components/BoxProduct";
import { useCallback, useState } from "react";
import { addCart } from '../../store/slice/cartSlice'
import InfoProductModal from "../../components/InfoProductModal";

const Favorite = () => {
    const products = useSelector(state => state.product.products)
    const favorite = useSelector(state => state.customer.favorite)
    const [open, setOpen] = useState(false)
    const cart = useSelector(state => state.cart.data)
    const dispatch = useDispatch()
    const customer = useSelector(state => state.customer)

    const [dataInfoProduct, setDataInfoProduct] = useState({
        cover: null,
        id: null,
        title: null,
        info: null,
        about: null,
        price: null,
        countCart: undefined,
        favorite: false
    })


    const handleAddCart = (id) => {
        dispatch(addCart(id))
    }

    const handleOpenModal = (data) => {
        setDataInfoProduct({
            cover: data.cover,
            id: data.id,
            title: data.title,
            info: data.info,
            about: data.about,
            price: data.price,
            countCart: data.countCart,
            user_id: data.user_id,
            favorite: data.favorite,
            fav:true
        })

        setOpen(true)
        
    }

    const handleCloseModal = useCallback(() => {
        setDataInfoProduct({
            cover: null,
            id: null,
            title: null,
            info: null,
            about: null,
            price: null,
            countCart: undefined,
            favorite: false
        })
        setOpen(false)
    }, [])


    return (
        <div className='wrapForBar'>
            <TopBar text="Улюблені товари" />
            <InfoProductModal
                open={open}
                dataInfoProduct={dataInfoProduct}
                handleCloseModal={handleCloseModal}
                onClick={() => handleAddCart(dataInfoProduct.id)}
            />

            <Box display="flex" flexWrap='wrap' >
                {
                    favorite.length ?
                    favorite.map( item => {
                        const product = products.find( pr => pr.id == item.product_id )
                        return (
                            <BoxProduct
                                key={product.id}
                                cover={product.cover}
                                name={product.name}
                                weight={product.weight}
                                count={product.count}
                                about={product.about}
                                price={product.price}
                                onClick={() => handleAddCart(product.id)}
                                openInfo={() => handleOpenModal({
                                    cover: product.cover,
                                    id: product.id,
                                    title: product.name,
                                    info: product.weight + ' г, ' + product.count,
                                    about: product.about,
                                    price: product.price,
                                    user_id: customer.data[0].user_id,
                                    countCart: cart.find(cat => cat.id == product.id),
                                    favorite: customer.favorite.find(pr => pr.product_id == product.id) !== undefined ? 'red' : '#7b7b7b'
                                })}
                                countCart={cart.find(cat => cat.id == product.id)}
                            />
                        )

                    } )
                    :
                    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" className="emptyCart">
                        <Typography>Поки що ні чого тут немає</Typography>
                    </Box>
                }
            </Box>
        </div>
    );
};

export default Favorite;