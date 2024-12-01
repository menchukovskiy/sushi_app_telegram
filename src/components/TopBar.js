
import { Typography, AppBar, Toolbar, Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom'

const TopBar = ( props ) => {
    const history = useNavigate()
    return (
        <AppBar className='header' position="fixed">
            <Toolbar>
                {
                    props.back !== undefined ? 
                    <Box sx={{width:'100%'}} display='flex' justifyContent='space-between' alignItems='center'>
                        <IconButton onClick={() => history(-1)} size="large">
                                <ArrowBackIosIcon />
                        </IconButton>
                        <Typography className='title' variant="h6" gutterBottom>{props.text}</Typography>
                        <IconButton size="large">
                                
                        </IconButton>
                    </Box>
                    :
                    <Typography className='title' variant="h6" gutterBottom>{props.text}</Typography>
                }
                
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;