import React, { useContext } from 'react';
import { ProductContext } from '../Context/Context';
import QtyUpdateButton from './QtyUpdateButton'; // Import the new component

const Cards = () => {
  const [Products] = useContext(ProductContext);

  return (
    Products.map((product, index) => (
      <div key={index} className='w-[15%] flex-wrap shrink-0 overflow-hidden justify-between flex flex-col rounded-md shadow-xl h-[45%] '>
        <div
          style={{ backgroundImage: `url(/assets/${product.image})` }}
          className='h-1/2 w-full bg-cover'
        ></div>
        <div className='flex flex-col gap-3 p-2 w-full h-1/2'>
          <h1>{product.name}</h1>
          <h3>Price: {product.price}</h3>
          <div className='h-[30%] w-full'>
            {product.qty > 0 ? <h4>Qty: {product.qty}</h4> : ""}
            {product.cost > 0 ? <h4>Cost: {product.cost}</h4> : ""}
          </div>
          <QtyUpdateButton index={index} price={product.price} />
        </div>
      </div>
    ))
  );
};

export default Cards;
