
import { Typography, AppBar, Toolbar } from '@mui/material';

const TopBar = ( props ) => {
    return (
        <AppBar className='header' position="fixed">
            <Toolbar>
                <Typography className='title' variant="h6" gutterBottom>{props.text}</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;