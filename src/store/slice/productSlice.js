  
 import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
 import { getCategorys } from '../../http/storeAPI'


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


 const productSlice = createSlice({
    name: 'product',
    initialState: {
        status: null,
        error: null,
        category: []
        
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

        
        
    }

   

});

export const { edit } = productSlice.actions;

export default productSlice.reducer;