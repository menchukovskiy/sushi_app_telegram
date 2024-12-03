import { Box, Typography } from '@mui/material';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { deepOrange } from '@mui/material/colors';

const MessFirs = () => {
    return (
        <Box display='flex' justifyContent='space-between' alignItems='center' className="wrapper">
            
                <CircleNotificationsIcon
                    sx={{ color: deepOrange[500], fontSize: 40 }}
                />
            
           
            <Box display='flex' alignItems='center'>
                <Typography sx={{ fontSize : '1.5rem', lineHeight: '1', marginRight: '10px' }}>5%</Typography>
                <Typography sx={{ fontSize : '1rem', lineHeight: '1', marginRight: '10px' }}>знижка на твое преше замовлення!</Typography>       
            </Box>
        </Box>
    );
};

export default MessFirs;