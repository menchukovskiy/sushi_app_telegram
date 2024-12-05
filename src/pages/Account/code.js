import TopBar from '../../components/TopBar';
import { Box, Typography, LinearProgress, linearProgressClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[200],
        ...theme.applyStyles('dark', {
            backgroundColor: theme.palette.grey[800],
        }),
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
        ...theme.applyStyles('dark', {
            backgroundColor: '#308fe8',
        }),
    },
}));

const Code = () => {
    const customer = useSelector(state => state.customer.data)

    const [progress, setProggres] = useState(0)
    const [show, setShow] = useState(true)

    useEffect(() => {
        let dataProgress = 0
        if (customer[0].sale == '0') {
            dataProgress = (customer[0].count_buy * 100) / 7000
        }

        if (customer[0].sale == '5') {
            dataProgress = (customer[0].count_buy * 100) / 14000
        }

        if (customer[0].sale == '10') {
            dataProgress = (customer[0].count_buy * 100) / 20000
        }

        if (customer[0].sale == '15') {
            setShow(false)
        }

        setProggres(dataProgress)

        console.log(dataProgress)
    }, [customer])

    return (
        <div className='wrapForBar'>
            <TopBar text="Знижки" back={true} />
            <Box className='saleBoxData' display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
                <Typography variant='h2'>{customer[0].sale}%</Typography>
                <Typography variant='h6'>ваша знижка</Typography>
            </Box>
            <Box>

                <Box className="saleProgress">
                    {show ?
                        <div>
                            <Typography>До настуаного рівня залишилося:</Typography>
                            <Box>
                                <BorderLinearProgress variant="determinate" value={progress} />
                            </Box>
                        </div>
                        :
                        <Typography>У вас максимальна знижка!</Typography>
                    }

                </Box>

                <Box className="subText">
                    <Typography variant='h6'>Як отримати знижку?</Typography>
                    <Typography>Щоб отримати знижку, просто робіть замовлення в додатку Telegram.
                        Система знижок є накопичувальною і ділиться на три рівні:</Typography>
                    <ul>
                        <li>5% — зробіть замовлення на 7000 грн</li>
                        <li>10% — зробіть замовлення на 14000 грн</li>
                        <li>15% — зробіть замовлення на 20000 грн</li>
                    </ul>
                </Box>



            </Box>
        </div>
    );
};

export default Code;