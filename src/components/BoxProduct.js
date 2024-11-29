import { Box, Typography, IconButton } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const BoxProduct = (props) => {
    const src = "https://blackdniprosushi.dp.ua/images/" + props.cover
    console.log(props.countCart)
    return (
        <Box className="productBox" display='flex' justifyContent="space-between" flexDirection='column'>
            <Box>
                <Box onClick={props.openInfo} className="productBox_cover">
                    <img src={src} />
                </Box>
                <Box>
                    <Typography className="productBox_name">{props.name}</Typography>
                </Box>
                <Box className="productBox_info">
                    {props.weight} г, {props.count}
                </Box>
                <Box className="productBox_about">
                    {props.about}
                </Box>
            </Box>

            <Box className="productBox_bottom" display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                    <Box className="price">{props.price} грн</Box>
                    {props.countCart !== undefined ? <span className="inCart">В кошику: {props.countCart.count}</span> : null}
                </Box>

                <IconButton onClick={props.onClick} className="addCart" size="large">
                    <AddShoppingCartIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default BoxProduct;