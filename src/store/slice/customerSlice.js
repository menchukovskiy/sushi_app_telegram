 
 import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
 import { get_customer, add_favorite } from '../../http/storeAPI'

 export const getData = createAsyncThunk(
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

export const addFavorite = createAsyncThunk(
    'customer/addFavorite',
    async function ( [$id, $user_id] ) {
        try {
            const data = await add_favorite( $id, $user_id )
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

        .addCase(addFavorite.fulfilled, ( state, action ) => {
            state.favorite = action.payload.favorits
            state.status = 'load'
        })
        
    }

   

});

export const { edit } = customerSlice.actions;

export default customerSlice.reducer;