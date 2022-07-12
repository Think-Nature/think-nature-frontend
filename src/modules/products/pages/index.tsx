import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import ProductService from '../api/productService';
import { fetchProducts, selectProducts } from '../store/productSlice';

export default function ProductPage() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  React.useEffect(() => {
    dispatch(fetchProducts(ProductService.getAllProducts));
  }, []);
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
