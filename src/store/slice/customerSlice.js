 
 import { createSlice } from '@reduxjs/toolkit';
 
 const customerSlice = createSlice({
    name: 'customer',
    initialState: {
        status: null,
        error: null,
        
    },
    reducers: {

        edit( state, action ){
            
        }
    }

   

});

export const { edit } = customerSlice.actions;

export default customerSlice.reducer;