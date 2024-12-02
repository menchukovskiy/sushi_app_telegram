import TopBar from '../../components/TopBar';
import { Box, Typography } from '@mui/material';

const Code = () => {
    return (
        <div className='wrapForBar'>
           <TopBar text="Знижки" back={true} />
           <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" className="emptyCart">
                <Typography>Розділ в розробці</Typography>
            </Box>
        </div>
    );
};

export default Code;