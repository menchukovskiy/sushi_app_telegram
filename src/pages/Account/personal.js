import TopBar from '../../components/TopBar';
import { Box, TextField, Button } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import dayjs from 'dayjs';
import InputMask from 'react-input-mask';
import { useInput } from '../../utils/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { editCustomer } from '../../store/slice/customerSlice'
import ModalSuccess from '../../components/ModalSuccess';


const Personal = () => {
    const dispatch = useDispatch()
    const store = useSelector(state => state.customer)

    const name = useInput(store.data[0].first_name)
    const birthday = dayjs(store.data[0].birthday)
    
    const [valueDate, setValueDate] = useState(birthday)
    const phone = useInput(store.data[0].phone)
    const [successModal, setSuccessModal] = useState(false)

    const handleSave = () => {
        dispatch( editCustomer( [ store.data[0].user_id, name.value, valueDate, phone.value  ] ) )
        .then(()=>{
            setSuccessModal(true)
        })
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
            <TopBar text="Особисті дані" back={true} />
            <Box sx={{ marginTop: '25vh' }}>
                <Box className="formLine" display="flex" justifyContent="space-between">
                    <TextField
                        value={name.value}
                        onChange={(e) => name.onChange(e)}
                        onBlur={(e) => name.onBlur(e)}
                        label="Ваше ім'я"
                        variant="outlined"
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            disabled={ store.data[0].birthday !== '' ? true : false }
                            label="Ваш день народження"
                            //format="DD/MM/YYYY"
                            value={ store.data[0].birthday !== '' ? valueDate : null}
                            onChange={(newValue) => setValueDate(newValue)}
                            inputFormat="dd-MM-yyyy"
                            
                            renderInput={(params) => <TextField {...params} helperText={null} />}
                        />
                    </LocalizationProvider>
                </Box>
                <Box className="formLine">
                    <InputMask
                        value={phone.value}
                        onChange={e => phone.onChange(e)}
                        onBlur={e => phone.onBlur(e)}
                        maskChar={null}
                        mask="+38 (999) 999 99 99"
                    >
                        {(inputProps) => <TextField fullWidth label="Ваш номер телефону" variant="outlined" {...inputProps} type="tel" />}
                    </InputMask>
                </Box>

                <Box display="flex" justifyContent="center" alignItems="center" className="cartBoxBtn">
                    <Button onClick={handleSave} variant="contained">Зберегти</Button>
                </Box>

            </Box>
        </div>
    );
};

export default Personal;