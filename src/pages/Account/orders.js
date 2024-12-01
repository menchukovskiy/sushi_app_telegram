import TopBar from '../../components/TopBar';
import SkeletonOrders from '../../components/SkeletonOrders';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../store/slice/ordersSlice'
import { Box, Typography } from '@mui/material';

const Orders = () => {

    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const store = useSelector(state => state.orders)
    const user = useSelector(state => state.customer)
    const products = useSelector(state => state.product)
    const status = {
        0 : {
            text: 'В обробці',
            color: '#ff973b'
        },
        1 : {
            text: 'Виконано',
            color: '#13e166'
        },
        2 : {
            text: 'Відміненно',
            color: '#e11349'
        }
    }

    useEffect(() => {
        if (store.status !== 'load') {
            dispatch(getData( user.data[0].user_id )).then( () => {
                setLoading(false)
            } )
        } else {
            setLoading(false) 
        }

    }, [dispatch])

    

    return (
        <div className='wrapForBar'>
            <TopBar text="Історія замовлень" back={true} />
            {
                loading ?
                    <SkeletonOrders />
                    :
                    store.data.length ?

                    store.data.map( item => {
                        let list = []
                        let price = 0
                        
                        const jsonString = JSON.parse( item.data )
                        for (var key in jsonString) {
                            const prod = products.products.find( pr => pr.id === key )
                            if( prod !== undefined ){
                                price += jsonString[key].count * prod.price
                                list.push({
                                    name: prod.name,
                                    count: jsonString[key].count
                                })
                            }
                            
                          }
                        

                        return(
                            <Box key={item.id} className="orders_row">
                                <Typography>{ item.date }</Typography>
                                <Box sx={{marginTop:'10px'}} display='flex' justifyContent='space-between' alignItems='center'>
                                    <Box className="orders_row_about">
                                        <Typography sx={{marginBottom:'10px'}}>{item.code}</Typography>
                                        {
                                            list.map( i => <p key={i.name}>&#127843; { i.name } {i.count} шт</p> )
                                        }
                                    </Box>
                                    <Box className='orderStatus' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                                       <Box>{price} грн</Box> 
                                       <Box sx={{ color: status[item.status].color }} >{ status[item.status].text  }</Box>
                                    </Box>
                                </Box>
                            </Box>
                        )
                    } ) :
                    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" className="emptyCart">
                        <Typography>Тут поки пусто</Typography>
                    </Box>
            }

        </div>
    );
};

export default Orders;