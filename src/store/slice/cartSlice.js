 
 import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
 import { finish_order } from '../../http/storeAPI'


 export const finishOrder = createAsyncThunk(
    'cart/finishOrder',
    async function ( [ $formData ], {rejectWithValue, dispatch} ) {
        try {
            const data = await finish_order( $formData )
            dispatch(clearCart())
            return data
        } catch (e) {
            throw new Error(e.response.data.message)
        }
            
    }
)

 const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        status: null,
        error: null,
        data: [],
        count: 0
        
    },
    reducers: {

        clearCart(state){
            state.count = 0
            state.data = []
        },

        editCart( state, action ){
            state.count -= 1
            if( state.count <= 0 ){
                state.count = 0
            }
            const idProduct = state.data.find( item => item.id == action.payload )
            idProduct.count -= 1
            if( idProduct.count <= 0 ){
                state.data = state.data.filter(data => data.id !== action.payload);
            }
        },

        addCart( state, action ) {
            const idProduct = state.data.find( item => item.id == action.payload )
            if( idProduct !== undefined ){
                if( idProduct.count < 10 ){
                    idProduct.count += 1
                    state.count += 1
                }
                
            } else {
                state.data.push(
                    {
                        id: action.payload,
                        count: 1
                    }
                );
                state.count += 1
            }
            
            
        }
    },
    extraReducers: builder => {
        builder

        .addCase(finishOrder.fulfilled, ( state, action ) => {
            
            state.status = 'load'
        })

       
        
    }

   

});

export const { editCart, addCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;