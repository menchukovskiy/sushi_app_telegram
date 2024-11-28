 
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

        edit( state, action ){
            
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

export const { edit, addCart } = cartSlice.actions;

export default cartSlice.reducer;