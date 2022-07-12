import * as React from 'react';
import { ProductData } from '../../types';

import style from './style.module.scss';

interface OwnProps {
  data: ProductData;
}

export default function ProductCard({ data }: OwnProps) {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img className={style.image} src='https://via.placeholder.com/188x188' />
      </div>
      <div>{data.name}</div>
      <div>{data.price}</div>
      <button className={style.button}>Add to cart</button>
    </div>
  );
}
