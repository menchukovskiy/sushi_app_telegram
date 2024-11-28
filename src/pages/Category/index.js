import { useLocation } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import BoxProduct from "../../components/BoxProduct";
import { addCart } from '../../store/slice/cartSlice'

const Category = () => {
    const location = useLocation()
    const pathArray = location.pathname.split('/')
    const id = parseInt(pathArray[pathArray.length - 1])
    const dispatch = useDispatch()
    const store = useSelector(state => state.product)
    const category = store.category.find(cat => cat.id == id)
    const products = store.products.filter( data => data.category == id)
    const cart = useSelector(state => state.cart.data)

    const handleAddCart = ( id ) => {
        
        dispatch( addCart( id ) )
        
    }

    console.log( cart )

    return (
        <div>
             <Typography className='title' variant="h6" gutterBottom>{category.name}</Typography>

             <Box display="flex" flexWrap='wrap' >
                {
                    products.map( item => 
                        <BoxProduct 
                            key={item.id}
                            cover={item.cover}
                            name={item.name}
                            weight={item.weight}
                            count={item.count}
                            about={item.about}
                            price={item.price}
                            onClick={ () => handleAddCart( item.id ) }
                        />
                     )
                }
             </Box>
        </div>
    );
};

export default Category;