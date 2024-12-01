import { useInput } from '../../utils/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { editCustomerAddress } from '../../store/slice/customerSlice'
import ModalSuccess from '../../components/ModalSuccess';
import TopBar from '../../components/TopBar';
import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';


const Address = () => {
    const dispatch = useDispatch()
    const store = useSelector(state => state.customer)
    const address = useInput(store.data[0].addres)
    const [successModal, setSuccessModal] = useState(false)

    const handleSave = () => {
        if( address.value !== '' ){
            dispatch( editCustomerAddress( [ store.data[0].user_id, address.value ] ) )
            .then(()=>{
                setSuccessModal(true)
            })
        }
    }

    return (
        <div className='wrapForBar'>
            <ModalSuccess
                open={successModal}
                onClose={
                    () => {
                        setSuccessModal(false)
                    }
                }
            />
            <TopBar text="Адреса доставки" back={true} />
            <Box sx={{ marginTop: '30vh' }}>
                <Box className="formLine">
                    <TextField
                        fullWidth
                        value={address.value}
                        onChange={(e) => address.onChange(e)}
                        onBlur={(e) => address.onBlur(e)}
                        label="Адреса доставки"
                        variant="outlined"
                    />
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center" className="cartBoxBtn">
                    <Button onClick={handleSave} variant="contained">Зберегти</Button>
                </Box>
            </Box>
        </div>
    );
};

export default Address;