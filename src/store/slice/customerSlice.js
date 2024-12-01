 
 import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
 import { get_customer } from '../../http/storeAPI'

 export const getData =  createAsyncThunk(
    'customer/getData',
    async function ( $id ) {
        try {
            const data = await get_customer( $id )
            return data
        } catch (e) {
            throw new Error(e.response.data.message)
        }
    }
)



 const customerSlice = createSlice({
    name: 'customer',
    initialState: {
        status: null,
        error: null,
        data: [],
        favorite: []
    },
    reducers: {

        edit( state, action ){
            
        }
    },
    extraReducers: builder => {
        builder

        .addCase(getData.fulfilled, ( state, action ) => {
            state.data = action.payload.info
            state.favorite = action.payload.favorits
            state.status = 'load'
        })
        
    }

   

});

export const { edit } = customerSlice.actions;

export default customerSlice.reducer;