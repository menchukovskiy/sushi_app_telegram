import TopBar from '../../components/TopBar';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const Bonus = () => {
    const customer = useSelector(state => state.customer.data)
    return (
        <div className='wrapForBar'>
           <TopBar text="Бонуси" back={true} />
           <Box className='saleBoxData' display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
                <Typography variant='h2'>{customer[0].bonus}</Typography>
                <Typography variant='h6'>ваші бонуси</Typography>
            </Box>
            <Box className="subText">
                    <Typography variant='h6'>Як працює система бонусів?</Typography>
                    <Typography>За кожне замовлення в додатку Telegram вам будуть нараховані бонусні бали в розмірі 1% від суми замовлення.</Typography>
                    <Typography>Бали можна буде використати при замовленні в додатку для розрахунку: 1 бонус = 1 грн.
                    </Typography>

                </Box>
        </div>
    );
};

export default Bonus;