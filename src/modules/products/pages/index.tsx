import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import ProductService from '../api/productService';
import ProductCard from '../components/ProductCard';
import { fetchProducts, selectProducts } from '../store/productSlice';

import style from './style.module.scss';

export default function ProductPage() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  React.useEffect(() => {
    dispatch(fetchProducts(ProductService.getAllProducts));
  }, []);
  return (
    <div className={style.productCardContainer}>
      {products.map(product => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
}
