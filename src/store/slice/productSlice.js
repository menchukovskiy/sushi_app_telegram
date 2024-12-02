  
 import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
 import { getCategorys, get_data } from '../../http/storeAPI'


export const getAllCategoty =  createAsyncThunk(
    'product/getAllCategoty',
    async function () {
        try {
            const data = await getCategorys()
            return data
        } catch (e) {
            throw new Error(e.response.data.message)
        }
    }
)

export const getData =  createAsyncThunk(
    'product/getData',
    async function () {
        try {
            const data = await get_data()
            return data
        } catch (e) {
            throw new Error(e.response.data.message)
        }
    }
)


 const productSlice = createSlice({
    name: 'product',
    initialState: {
        status: null,
        error: null,
        category: [],
        products: [],
        banner: [],
        top: []
        
    },
    reducers: {

        edit( state, action ){
            
        }
    },
    extraReducers: builder => {
        builder

        .addCase(getAllCategoty.fulfilled, ( state, action ) => {
            state.category = action.payload
            state.status = 'load'
        })

        .addCase(getData.fulfilled, ( state, action ) => {
            state.category = action.payload.category
            state.products = action.payload.products
            state.banner = action.payload.banner
            state.top = action.payload.top
            state.status = 'load'
        })

        
        
    }

   

});

export const { edit } = productSlice.actions;

export default productSlice.reducer;