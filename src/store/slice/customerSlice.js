 
 import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
 import { get_customer, add_favorite, edit_customer, edit_customer_address } from '../../http/storeAPI'

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

export const editCustomer = createAsyncThunk(
    'customer/editCustomer',
    async function ( [$id, $name, birthday, phone] ) {
        try {
            const data = await edit_customer( $id, $name, birthday, phone )
            return data
        } catch (e) {
            throw new Error(e.response.data.message)
        }
    }
)

export const editCustomerAddress = createAsyncThunk(
    'customer/editCustomerAddress',
    async function ( [$id, $address] ) {
        try {
            const data = await edit_customer_address( $id, $address )
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
        favorite: [],
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

        .addCase(editCustomer.fulfilled, ( state, action ) => {
            state.data = action.payload
            state.status = 'load'
        })

        .addCase(editCustomerAddress.fulfilled, ( state, action ) => {
            state.data = action.payload
            state.status = 'load'
        })
        
    }

   

});

export const { edit } = customerSlice.actions;

export default customerSlice.reducer;