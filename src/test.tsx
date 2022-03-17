import React from 'react';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query';
import ProductService from './api/products/productService';

const Test = () => {
  const { isLoading, isError, data, error } = useQuery('products', () => ProductService.getAllProducts());

  if (isLoading) {
    return <>loading...</>;
  }

  if (isError) {
    return <>{error} there was an error.</>;
  }

  return (
    <>
      <div>here are the products:</div>
      <div>{data?.data ? data.data.map(product => <li key={product.id}>{product.name}</li>) : <div>no products found</div>}</div>
    </>
  );
};

export default Test;
