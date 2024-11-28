import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../store/slice/productSlice'
import ButtonIconSvg from '../../components/ButtonIconSvg';
import { orange } from '@mui/material/colors';
import { Box, Typography } from '@mui/material';


const Home = () => {

    const dispatch = useDispatch()
    const store = useSelector(state => state.product)
    

    useEffect(() => {
        if (store.status !== 'load') {
            dispatch(getData())
        }

    }, [dispatch])




    return (
        <div >

            <Box>
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
            </Box>



        </div>
    );
};

export default Home;