import TopBar from '../../components/TopBar';
import { Box, TextField, Button } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import dayjs from 'dayjs';
import { useCallback } from 'react';
import InputMask from 'react-input-mask';
import { useInput } from '../../utils/hooks';


const Offer = () => {

    const today = dayjs(new Date())
    const [valueDate, setValueDate] = useState(today)

    const phone = useInput('', { isEmpty: true, minLength: 19 })
    const time = useInput('Найближчий', { isEmpty: true, maxLength: 120 })
    const address = useInput('',{isEmpty:true})

    const checkDisable = useCallback( () => {
        if( phone.value.length < 19 || time.value.length < 2 || address.value.length < 10 ){
            return true
        }
        return false 
    }, [phone.value, time.value] )

    return (
        <div className='wrapForBar'>
            <TopBar text="Оформлення замовлення" />
            <Box>


           

                <Box className="formLine" display="flex" justifyContent="space-between">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            minDate={today}
                            label="Дата доставлення"
                            format="DD/MM/YYYY"
                            value={valueDate}
                            onChange={(newValue) => setValueDate(newValue)}
                            inputFormat="dd-MM-yyyy"
                            renderInput={(params) => <TextField {...params} helperText={null} />}
                        />
                    </LocalizationProvider>
                    <TextField
                        value={time.value}
                        onChange={ (e) => time.onChange(e)}
                        onBlur={ (e) => time.onBlur(e)}
                        label="Час доставлення"
                        variant="outlined"
                    />
                </Box>

                <Box className="formLine">
                    <InputMask
                        value={phone.value}
                        onChange={e => phone.onChange(e)}
                        onBlur={e => phone.onBlur(e)}
                        error={phone.getError()}
                        maskChar={null}
                        mask="+38 (999)-999-99-99"
                    >
                        {(inputProps) => <TextField fullWidth label="Номер телефону" variant="outlined" {...inputProps} type="tel" />}
                    </InputMask>
                </Box>

                <Box className="formLine">
                    <TextField
                    value={address.value}
                    onChange={ (e) => address.onChange(e) }
                    onBlur={ (e) => address.onBlur( e ) }
                    error={address.getError()}
                    fullWidth label="Адреса доставлення" variant="outlined"  />
                    
                </Box>


            </Box>

       

            <Box display="flex" justifyContent="center" alignItems="center" className="cartBoxBtn">
                <Button disabled={checkDisable()}  variant="contained">Оформити замовлення</Button>
            </Box>
        </div>
    );
};

export default Offer;