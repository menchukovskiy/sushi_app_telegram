import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const SkeletonOrders = () => {

    

    return (
        <Stack spacing={1}>
            <Skeleton animation="wave" width={'20%'} variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton animation="wave" variant="rectangular" width={'100%'} height={130} />
            <Skeleton animation="wave" variant="rectangular" width={'100%'} height={130} />
            <Skeleton animation="wave" variant="rectangular" width={'100%'} height={130} />
            <Skeleton animation="wave" width={'20%'} variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton animation="wave" variant="rectangular" width={'100%'} height={130} />
            <Skeleton animation="wave" variant="rectangular" width={'100%'} height={130} />
        </Stack>
    );
};

export default SkeletonOrders;