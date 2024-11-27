import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoty } from '../../store/slice/productSlice'
import ButtonIconSvg from '../../components/ButtonIconSvg';
import { orange } from '@mui/material/colors';
import { Box } from '@mui/material';
import { Link } from "react-router-dom"

const Home = () => {

    const dispatch = useDispatch()
    const store = useSelector(state => state.product)

    console.log(store.category)

    useEffect(() => {
        if (store.status !== 'load') {
            dispatch(getAllCategoty())
        }

    }, [dispatch])




    return (
        <div >

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

        </div>
    );
};

export default Home;