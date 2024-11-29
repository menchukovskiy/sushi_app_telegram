import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { AppBar, Box, Dialog, Toolbar, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const InfoProductModal = (props) => {
    const srcImg = "https://blackdniprosushi.dp.ua/images/"
    const handleAddCart = () => {
        props.onClick()
        props.handleCloseModal()
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
                            onClick={props.handleCloseModal}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box className="infoProducModalContent">
                <Box className="productBox_cover">
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
                            <Box className="priceModal">{props.dataInfoProduct.price} грн</Box>
                            {props.dataInfoProduct.countCart !== undefined ? <span className="inCart">В кошику: {props.dataInfoProduct.countCart.count}</span> : null}
                        </Box>
                        <Box>
                            <IconButton onClick={() => {}} className="addFavorite" size="large">
                                <FavoriteIcon />
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