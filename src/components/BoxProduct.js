import { Box, Typography, IconButton } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";

const BoxProduct = (props) => {
   
    const [sale, setSale] = useState(0)
    
    const src = "https://blackdniprosushi.dp.ua/images/" + props.cover

    useEffect( () => {
        if( props.sale !== '0' ){
            setSale(props.sale)
        } else {
            setSale(0)
        }
    }, [props] )
    
    return (
        <Box className="productBox" display='flex' justifyContent="space-between" flexDirection='column'>
            <Box>
                <Box onClick={props.openInfo} className="productBox_cover">
                    {
                        sale ? 
                        <div className="sale">-{sale}%</div> 
                        : null
                    }
                    
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
                    <Box className="price">
                        {
                            sale ? 
                            <Box>
                                <div className="inPrice"> {props.price} грн</div>
                                <div className="salePrice"> { (props.price - (props.price * sale)/100)} грн</div>
                            </Box>
                            :
                            props.price + ' грн'
                        }
                        
                        </Box>
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