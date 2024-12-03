import Skeleton from '@mui/material/Skeleton';

const HomeBadge = ( props ) => {
    return (
        <div className='homeBadge'>
            <div className='homeBadge_content'>{props.content}</div>
            <Skeleton variant="rectangular" width={'100%'} height={'inherit'} />
        </div>
    );
};

export default HomeBadge;