import { Box, Skeleton, Stack } from '@mui/material';


const SkeletonHome = () => {
    return (
        <Stack spacing={1}>

            <Skeleton animation="wave" variant="rectangular" width={'100%'} height={220} />


            <Box display='flex' justifyContent='center' alignItems='center'>
                <Skeleton animation="wave" width={'20%'} variant="text" sx={{ fontSize: '1rem' }} />
            </Box>

            <Stack
                spacing={{ xs: 2.3, sm: 2 }}
                direction="row"
                useFlexGap
                sx={{ flexWrap: 'wrap' }}
            >
                <Skeleton animation="wave" variant="rectangular" width={'30%'} height={100} />
                <Skeleton animation="wave" variant="rectangular" width={'30%'} height={100} />
                <Skeleton animation="wave" variant="rectangular" width={'30%'} height={100} />
                <Skeleton animation="wave" variant="rectangular" width={'30%'} height={100} />
                <Skeleton animation="wave" variant="rectangular" width={'30%'} height={100} />
                <Skeleton animation="wave" variant="rectangular" width={'30%'} height={100} />
            </Stack>

            <Box display='flex' justifyContent='center' alignItems='center'>
                <Skeleton animation="wave" width={'20%'} variant="text" sx={{ fontSize: '1rem' }} />
            </Box>

            <Stack
                spacing={{ xs: 2.3, sm: 2 }}
                direction="row"
                useFlexGap
                sx={{ flexWrap: 'wrap' }}
            >
                <Skeleton animation="wave" variant="rectangular" width={'47%'} height={250} />
                <Skeleton animation="wave" variant="rectangular" width={'47%'} height={250} />
                <Skeleton animation="wave" variant="rectangular" width={'47%'} height={250} />
                <Skeleton animation="wave" variant="rectangular" width={'47%'} height={250} />
                
            </Stack>

        </Stack>
    );
};

export default SkeletonHome;