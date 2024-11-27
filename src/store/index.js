import { configureStore } from '@reduxjs/toolkit';
import customer from './slice/customerSlice';
import product from './slice/productSlice';

export const store = configureStore({
    reducer: {
        customer: customer,
        product: product
    }
}); 