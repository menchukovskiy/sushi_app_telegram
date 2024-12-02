import { Box, CircularProgress } from '@mui/material';

const Loading = () => {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' className='loadingBox'>
            <CircularProgress size="3rem" />
        </Box>
    );
};

export default Loading;