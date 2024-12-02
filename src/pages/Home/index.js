import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../store/slice/productSlice'
import ButtonIconSvg from '../../components/ButtonIconSvg';
import { orange } from '@mui/material/colors';
import { Box, Typography } from '@mui/material';
import InfoProductModal from "../../components/InfoProductModal";
import Slider from "react-slick";
import BoxProduct from "../../components/BoxProduct";
import { addCart } from '../../store/slice/cartSlice'
import SkeletonHome from '../../components/SkeletonHome';




const Home = () => {


    const dispatch = useDispatch()
    const store = useSelector(state => state.product)
    const [loading, setLoading] = useState(true)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: false,
        autoplay: true,
    }

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

    useEffect(() => {
        if (store.status !== 'load') {
            dispatch(getData()).then( () => {
                setLoading(false)
            } )
        }

    }, [dispatch])




    return (
        <div >
            <InfoProductModal
                open={open}
                dataInfoProduct={dataInfoProduct}
                handleCloseModal={handleCloseModal}
                onClick={() => handleAddCart(dataInfoProduct.id)}
            />

            {
                loading ? <SkeletonHome /> :

                    <Box>
                        <Slider className='sliderWrap' {...settings}>
                            {
                                store.banner.map(item => {
                                    const src = 'https://blackdniprosushi.dp.ua/asset/img/' + item.src
                                    return (
                                        <div className='sliderBox'>
                                            <img src={src} />
                                        </div>
                                    )
                                }
                                )
                            }


                        </Slider>

                        <Typography className='title' variant="h6" gutterBottom>Меню</Typography>
                        <Box display="flex" flexWrap="wrap">
                            {
                                store.category.map(cat =>
                                    <ButtonIconSvg
                                        id={cat.id}
                                        name={cat.icon}
                                        title={cat.name}
                                        size='40'
                                        color={orange['500']}
                                        key={cat.id} />
                                )
                            }
                        </Box>

                        <Typography className='title' variant="h6" gutterBottom>Популярні</Typography>

                        <Box display="flex" flexWrap='wrap'>
                            {
                                store.top.map(item => {
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

                    </Box>

            }

        </div>
    );
};

export default Home;