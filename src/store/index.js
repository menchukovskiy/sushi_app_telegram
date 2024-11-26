import { configureStore } from '@reduxjs/toolkit';
import customer from './slice/customerSlice';

export const store = configureStore({
    reducer: {
        store: customer,
    }
}); 