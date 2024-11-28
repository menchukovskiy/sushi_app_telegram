import { useLocation } from "react-router-dom"
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import BoxProduct from "../../components/BoxProduct";

const Category = () => {
    const location = useLocation()
    const pathArray = location.pathname.split('/')
    const id = parseInt(pathArray[pathArray.length - 1])

    const store = useSelector(state => state.product)
    const category = store.category.find(cat => cat.id == id)
    const products = store.products.filter( data => data.category == id)
   
    console.log(products)

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
                        />
                     )
                }
             </Box>
        </div>
    );
};

export default Category;