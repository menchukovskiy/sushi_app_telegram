import {  FormControl, Select, InputLabel, MenuItem } from '@mui/material';
import { arrayTime } from '../utils/arrayTiem';


const SelectTimeDelivery = ( props ) => {
    const today = new Date().valueOf()
    const selectDate = new Date(props.date).valueOf()
    const minTime = new Date().setHours(12, 30, 0, 0)
    const maxTime = new Date().setHours(20, 30, 0, 0)

    return (
        <FormControl fullWidth sx={{marginLeft:'30px'}} > 
                        <InputLabel id="timeDelivery">Час доставлення</InputLabel>
                        <Select
                            labelId="timeDelivery"
                            id="timeDelivery-select"
                            value={props.value}
                            label="Час доставлення"
                            onChange={ props.onChange }
                        >

                            {
                                (maxTime >= selectDate && selectDate > minTime) ||
                                selectDate > today ?
                                arrayTime.map( item => {
                                    const time = item.value.split(':')
                                    const checkTime = new Date().setHours(time[0], time[1], 0, 0)
                                    if( today < checkTime || selectDate > today || item.value === '00:00' ){
                                        return(
                                            <MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>
                                        )
                                    }
                                    
                                    
                                } )
                                :
                                <MenuItem key={0} value={0}>Не працюємо</MenuItem>
                            }
                            
                        </Select>
                    </FormControl>
    );
};

export default SelectTimeDelivery;