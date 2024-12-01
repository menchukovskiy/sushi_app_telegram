import { configureStore } from '@reduxjs/toolkit';
import customer from './slice/customerSlice';
import product from './slice/productSlice';
import cart from './slice/cartSlice'
import orders from './slice/ordersSlice';

export const store = configureStore({
    reducer: {
        customer: customer,
        product: product,
        cart: cart,
        orders: orders
    }
}); 