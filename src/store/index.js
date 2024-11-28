import { configureStore } from '@reduxjs/toolkit';
import customer from './slice/customerSlice';
import product from './slice/productSlice';
import cart from './slice/cartSlice'

export const store = configureStore({
    reducer: {
        customer: customer,
        product: product,
        cart: cart
    }
}); 