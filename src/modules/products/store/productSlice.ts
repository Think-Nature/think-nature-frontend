import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiData } from 'src/api/ApiService';
import type { RootState } from 'src/store';
import { APISTATE } from 'src/store/types';
import { ProductData } from '../types';

interface ProductState {
  products: ProductData[];
  apiState: APISTATE;
  error?: string;
}

const initialState: ProductState = {
  products: [],
  apiState: APISTATE.init,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<ProductData[]>) => {
      state.products = [...state.products, ...action.payload];
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.apiState = APISTATE.loading;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.apiState = APISTATE.failed;
      state.error = action.error.message;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = [...state.products, ...action.payload];
      state.apiState = APISTATE.succeeded;
    });
  },
});

export const { addProducts } = productSlice.actions;

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (apiCall: () => Promise<ApiData<ProductData[]>>) => {
  const res = await apiCall();
  return res.data || [];
});

export const selectProducts = (state: RootState) => state.products.products;

export default productSlice.reducer;
