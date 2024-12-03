import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { AppBar, Box, Dialog, Toolbar, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../store/slice/customerSlice'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const InfoProductModal = (props) => {
    const srcImg = "https://blackdniprosushi.dp.ua/images/"


    

    const handleAddCart = () => {
        props.onClick()
        props.handleCloseModal()
        
    }


    const dispatch = useDispatch()

    const [sale, setSale] = useState(0)

    useEffect( () => {
        if( props.dataInfoProduct.sale !== '0' ){
            setSale(props.dataInfoProduct.sale)
        } else {
            setSale(0)
        }
    }, [props] )
    

    const handleFavorite = () => {
        dispatch( addFavorite( [ props.dataInfoProduct.id, props.dataInfoProduct.user_id ] ) )
        if( props.dataInfoProduct.favorite === '#7b7b7b' ){
            props.dataInfoProduct.favorite = 'red'
        } else {
             props.dataInfoProduct.favorite = '#7b7b7b'
        }
        if(props.dataInfoProduct.fav !== undefined ){
            props.handleCloseModal()
        }
    }

    

    return (
        <Dialog
            className="infoProductModal"
            keepMounted
            aria-describedby="alert-dialog-slide-description"
            open={props.open}
            onClose={props.handleCloseModal}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <Box
                        sx={{ width: '100%' }}
                        display="flex"
                        justifyContent="end"
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={() => { 
                                props.handleCloseModal()
                               
                             }}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box className="infoProducModalContent">
                <Box className="productBox_cover">
                    {
                        sale ? 
                        <div className="sale">-{sale}%</div> 
                        : null
                    }
                    <img src={srcImg + props.dataInfoProduct.cover} />
                    
                </Box>
                <Box p={2}>
                   
                    <Box className="infoProducModalContent_title">
                        {props.dataInfoProduct.title}
                    </Box>
                    <Box className="infoProducModalContent_info">
                        {props.dataInfoProduct.info}
                    </Box>
                    <Box className="infoProducModalContent_about">
                        {props.dataInfoProduct.about}
                    </Box>
                    <Box className="infoProducModalContent_price" display="flex" justifyContent="space-between" alignItems="center">
                        <Box>
                            <Box className="priceModal">

                            {
                            sale ? 
                            <Box>
                                <div className="inPrice"> {props.dataInfoProduct.price} грн</div>
                                <div className="salePrice"> { (props.dataInfoProduct.price - (props.dataInfoProduct.price * sale)/100)} грн</div>
                            </Box>
                            :
                            props.dataInfoProduct.price + ' грн'
                         }
                        </Box>

                            {props.dataInfoProduct.countCart !== undefined ? <span className="inCart">В кошику: {props.dataInfoProduct.countCart.count}</span> : null}
                        </Box>
                        <Box>
                            <IconButton
                                onClick={handleFavorite}
                                className="addFavorite"
                                
                                size="large">
                                <FavoriteIcon sx={{fill: props.dataInfoProduct.favorite }} />
                            </IconButton>
                            <IconButton onClick={handleAddCart} className="addCart" size="large">
                                <AddShoppingCartIcon />
                            </IconButton>
                        </Box>

                    </Box>
                </Box>

            </Box>
        </Dialog>
    );
};

export default InfoProductModal;