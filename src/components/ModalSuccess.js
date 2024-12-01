import { Box, Dialog, DialogContent, Button } from "@mui/material"
 
const ModalSuccess = ({ open, onClose }) => {
    
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="form-dialog-title"
            sx={{
                '& .MuiPaper-root' : {
                    minWidth : '300px !important'
                }
            }}
        >
            <DialogContent className='success_message'>
                Дані збережено
            </DialogContent>

            <Box display="flex" justifyContent="center" alignItems="center">
                <Button
                    sx={{
                        marginBottom : '15px'
                    }}
                    variant="contained" color="success"
                    onClick={() => onClose()}
                >
                    Закрити
                </Button>
            </Box>

        </Dialog>
    );
};

export default ModalSuccess;