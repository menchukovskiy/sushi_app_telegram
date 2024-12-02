import TopBar from '../../components/TopBar';
import { Box, TextField, Button, FormControl, Select, InputLabel, MenuItem } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import dayjs from 'dayjs';
import { useCallback } from 'react';
import InputMask from 'react-input-mask';
import { useInput } from '../../utils/hooks';
import { useDispatch, useSelector } from 'react-redux';
import SelectTimeDelivery from '../../components/SelectTimeDelivery';
import { finishOrder } from '../../store/slice/cartSlice'

const Offer = () => {

    

    const dispatch = useDispatch()
    const store = useSelector(state => state.customer)
    const cart = useSelector(state => state.cart)

    const today = dayjs(new Date())
    const [valueDate, setValueDate] = useState(today)

    const phone = useInput(store.data[0].phone, { isEmpty: true, minLength: 19 })
    
    const [time, setTime] = useState('00:00')
    const address = useInput(store.data[0].addres, { isEmpty: true })
    
    const comment = useInput('')
    const appliances = useInput(1)
    const appliancesChild = useInput(0)
    const paymentMethod = useInput(0)

    const checkDisable = useCallback(() => {
        if (phone.value.length < 19 || time === 0 || address.value.length < 10 ) {
            return true
        }
        return false
    }, [phone.value, time, address.value])

    const handleTime = ( data ) => {
        setTime( data )
    }

    const handleBuy = () => {
        
        const formData = new FormData()

        formData.append( 'user_id', store.data[0].user_id )
        formData.append( 'phone',  phone.value )
        formData.append( 'address',  address.value )
        formData.append( 'valueDate',  valueDate )
        formData.append( 'time',  time )
        formData.append( 'comment',  comment.value )
        formData.append( 'appliances',  appliances.value )
        formData.append( 'appliancesChild',  appliancesChild.value )
        formData.append( 'paymentMethod',  paymentMethod.value )
        formData.append( 'cartData', JSON.stringify( cart.data ) )
        
        dispatch( finishOrder( [ formData ] ) )
    }


    return (
        <div className='wrapForBar'>
            <TopBar text="Оформлення замовлення" />
            <Box sx={{ marginTop: '10vh' }}>
                <Box className="formLine" display="flex" justifyContent="space-between">
                    <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
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

                    <SelectTimeDelivery 
                        value={time}
                        onChange={(t) => handleTime(t)}
                        date={valueDate}
                    />
                    

                    
                </Box>

                <Box className="formLine" display="flex" justifyContent="space-between">

                    <FormControl fullWidth sx={{marginRight:'30px'}}> 
                        <InputLabel id="appliances">Кіл-ть приладів</InputLabel>
                        <Select
                            labelId="appliances"
                            id="appliances-select"
                            value={appliances.value}
                            label="Кіл-ть приладів"
                            onChange={(e) => appliances.onChange(e)}
                        >
                            <MenuItem value={0}>0</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel id="appliancesChild">Кіл-ть приладів учбових</InputLabel>
                        <Select
                            labelId="appliancesChild"
                            id="appliancesChild-select"
                            value={appliancesChild.value}
                            label="Кіл-ть приладів учбових"
                            onChange={(e) => appliancesChild.onChange(e)}
                        >
                            <MenuItem value={0}>0</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                        </Select>
                    </FormControl>

                </Box>

                <Box className="formLine">
                    <InputMask
                        value={phone.value}
                        onChange={e => phone.onChange(e)}
                        onBlur={e => phone.onBlur(e)}
                        error={phone.getError()}
                        maskChar={null}
                        mask="+38 (999) 999 99 99"
                    >
                        {(inputProps) => <TextField fullWidth label="Номер телефону" variant="outlined" {...inputProps} type="tel" />}
                    </InputMask>
                </Box>

                <Box className="formLine">
                    <TextField
                        value={address.value}
                        onChange={(e) => address.onChange(e)}
                        onBlur={(e) => address.onBlur(e)}
                        error={address.getError()}
                        fullWidth label="Адреса доставлення" variant="outlined" />

                </Box>

                <Box className="formLine">
                    
                        <FormControl fullWidth sx={{marginRight:'30px'}}> 
                        <InputLabel id="paymentMethod">Способ оплати</InputLabel>
                        <Select
                            labelId="paymentMethod"
                            id="paymentMethod-select"
                            value={paymentMethod.value}
                            label="Кіл-ть приладів"
                            onChange={ (e) => paymentMethod.onChange(e)}
                        >
                            <MenuItem value={0}>Карткою</MenuItem>
                            <MenuItem value={1}>Готівкою</MenuItem>
                            
                        </Select>
                    </FormControl>

                </Box>

                <Box className="formLine">
                    <TextField
                        fullWidth
                        value={comment.value}
                        onChange={(e) => comment.onChange(e)}
                        onBlur={(e) => comment.onBlur(e)}
                        placeholder="Коментар до замовлення"
                    />
                </Box>

            </Box>



            <Box display="flex" justifyContent="center" alignItems="center" className="cartBoxBtn">
                <Button onClick={handleBuy} disabled={checkDisable()} variant="contained">Оформити замовлення</Button>
            </Box>
        </div>
    );
};

export default Offer;