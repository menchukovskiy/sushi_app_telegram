import React from 'react';
import TopBar from '../../components/TopBar';
import { Box, Typography, IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate  } from 'react-router-dom'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PercentIcon from '@mui/icons-material/Percent';

const Account = () => {
    const history = useNavigate()
    

    return (
        <div className='wrapForBar'>
            <TopBar text="Ваші дані" />
            <Box>
                <Box onClick={ () => history( 'personal' ) } className="listAccount" display="flex" justifyContent='space-between' alignItems='center'>
                    <Box display="flex" justifyContent='space-between' alignItems='center'>
                        <AccountBoxIcon />
                        <Typography className='listAccount_title'>Особисті дані</Typography>
                    </Box>
                    
                    <IconButton  size="small">
                        <NavigateNextIcon />
                    </IconButton>
                </Box>

                <Box onClick={ () => history( 'address' ) } className="listAccount" display="flex" justifyContent='space-between' alignItems='center'>
                    
                    <Box display="flex" justifyContent='space-between' alignItems='center'>
                        <LocalShippingIcon />
                        <Typography className='listAccount_title'>Адреса доставки</Typography>
                    </Box>
                    
                    <IconButton  size="small">
                        <NavigateNextIcon />
                    </IconButton>
                </Box>
                <Box onClick={ () => history( 'orders' ) } className="listAccount" display="flex" justifyContent='space-between' alignItems='center'>
                    
                    <Box display="flex" justifyContent='space-between' alignItems='center'>
                        <ReceiptIcon />
                        <Typography className='listAccount_title'>Історія замовлень</Typography>
                    </Box>
                    <IconButton  size="small">
                        <NavigateNextIcon />
                    </IconButton>
                </Box>
                <Box onClick={ () => history( 'code' ) } className="listAccount" display="flex" justifyContent='space-between' alignItems='center'>
                    
                    <Box display="flex" justifyContent='space-between' alignItems='center'>
                        <PercentIcon />
                        <Typography className='listAccount_title'>Знижки</Typography>
                    </Box>
                    <IconButton  size="small">
                        <NavigateNextIcon />
                    </IconButton>
                </Box>
                <Box onClick={ () => history( 'bonus' ) } className="listAccount" display="flex" justifyContent='space-between' alignItems='center'>
                    
                    <Box display="flex" justifyContent='space-between' alignItems='center'>
                        <WorkspacePremiumIcon />
                        <Typography className='listAccount_title'>Бонуси</Typography>
                    </Box>
                    <IconButton  size="small">
                        <NavigateNextIcon />
                    </IconButton>
                </Box>
            </Box>
        </div>
    );
};

export default Account;