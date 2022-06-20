import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/store';
import { ProductData } from '../types';

interface ProductState {
  products: ProductData[];
}

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<ProductData[]>) => {
      state.products = [...state.products, ...action.payload];
    },
  },
});

export const { addProducts } = productSlice.actions;

export const selectProducts = (state: RootState) => state.products.products;

export default productSlice.reducer;
