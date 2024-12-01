 
 import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
 import { get_customer_orders } from '../../http/storeAPI'

 

 export const getData = createAsyncThunk(
    'orders/getData',
    async function ( $id ) {
        try {
            const data = await get_customer_orders( $id )
            return data
        } catch (e) {
            throw new Error(e.response.data.message)
        }
    }
)


 const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        status: null,
        error: null,
        data: [],
    },
    reducers: {

        edit( state, action ){
            
        }
    },

    extraReducers: builder => {
        builder

        .addCase(getData.fulfilled, ( state, action ) => {
            state.data = action.payload
            state.status = 'load'
        })
        
    }

});

export const { edit } = ordersSlice.actions;

export default ordersSlice.reducer;