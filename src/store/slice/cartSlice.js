 
 import { createSlice } from '@reduxjs/toolkit';
 
 const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        status: null,
        error: null,
        data: [],
        count: 0
        
    },
    reducers: {

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
    }

   

});

export const { editCart, addCart } = cartSlice.actions;

export default cartSlice.reducer;