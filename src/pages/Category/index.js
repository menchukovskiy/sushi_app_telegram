import { useLocation } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import BoxProduct from "../../components/BoxProduct";
import { addCart } from '../../store/slice/cartSlice'
import { useCallback, useState } from "react";
import InfoProductModal from "../../components/InfoProductModal";
import TopBar from "../../components/TopBar";




const Category = () => {
    const location = useLocation()
    const pathArray = location.pathname.split('/')
    const id = parseInt(pathArray[pathArray.length - 1])
    const dispatch = useDispatch()
    const store = useSelector(state => state.product)
    const category = store.category.find(cat => cat.id == id)
    const products = store.products.filter(data => data.category == id)
    const [open, setOpen] = useState(false)
    const cart = useSelector(state => state.cart.data)
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
            favorite: data.favorite
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
        <div className="wrapForBar">
            <TopBar text={category.name} />

            <InfoProductModal
                open={open}
                dataInfoProduct={dataInfoProduct}
                handleCloseModal={handleCloseModal}
                onClick={() => handleAddCart(dataInfoProduct.id)}
            />



            <Box display="flex" flexWrap='wrap' >
                {
                    products.map(item => {
                        return (
                            <BoxProduct
                                key={item.id}
                                cover={item.cover}
                                name={item.name}
                                weight={item.weight}
                                count={item.count}
                                about={item.about}
                                price={item.price}
                                onClick={() => handleAddCart(item.id)}
                                openInfo={() => handleOpenModal({
                                    cover: item.cover,
                                    id: item.id,
                                    title: item.name,
                                    info: item.weight + ' г, ' + item.count,
                                    about: item.about,
                                    price: item.price,
                                    user_id: customer.data[0].user_id,
                                    countCart: cart.find(cat => cat.id == item.id),
                                    favorite: customer.favorite.find(pr => pr.product_id == item.id) !== undefined ? 'red' : '#7b7b7b'
                                })}
                                countCart={cart.find(cat => cat.id == item.id)}
                            />
                        )

                    }

                    )
                }
            </Box>
        </div>
    );
};

export default Category;