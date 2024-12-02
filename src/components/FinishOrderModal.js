import { Box, Dialog, DialogContent, Button, Typography } from "@mui/material"
import { useNavigate  } from 'react-router-dom'

const FinishOrderModal = ( { open } ) => {
    const history = useNavigate()
    return (
        <Dialog
            open={open}
            aria-labelledby="form-dialog-title"
            sx={{
                '& .MuiPaper-root' : {
                    minWidth : '300px !important'
                }
            }}
        >
            <DialogContent className='success_message'>
                <Typography>Ваше замовлення прийнято!</Typography>
                <Typography>Очікуйте на дзвінок менеджера!</Typography>
            </DialogContent>

            <Box display="flex" justifyContent="center" alignItems="center">
                <Button
                    sx={{
                        marginBottom : '15px'
                    }}
                    variant="contained" color="success"
                    onClick={ () => history( '/' ) }
                >
                    Добре
                </Button>
            </Box>

        </Dialog>
    );
};

export default FinishOrderModal;