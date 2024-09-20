import React, { useContext } from 'react';
import { ProductContext } from '../Context/Context';
import QtyUpdateButton from './QtyUpdateButton';
import { Link, useNavigate } from 'react-router-dom';

const Summary = () => {
  const [Products] = useContext(ProductContext);
  const boughtProducts = Products.filter((prod) => (prod.qty && prod.qty > 0));
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  const totalCartValue = boughtProducts.reduce((sum, element) => {
    return sum + element.cost;
  }, 0);

  return (
    <div className='w-full h-screen bg-zinc-500/[0.25] flex items-center justify-center'>
      <div className='w-[75%] h-auto bg-white rounded-md flex flex-col gap-3 py-3 px-5 shadow-xl'>
        <h3 className='font-bold text-2xl'>Order Summary : </h3>
        {boughtProducts && boughtProducts.map((prod, index) => {
          return (
            <div key={index} className='w-full'>
              <div className='flex w-full justify-between'>
                <div className='w-1/2 flex text-zinc-400 justify-between'>
                  <h4>{prod.name}</h4>
                  <h4>{prod.qty}</h4>
                </div>
                <div className='w-1/2'>
                  <QtyUpdateButton
                    index={Products.findIndex(p => p.name === prod.name)}
                    price={prod.price}
                  />
                </div>
              </div>
            </div>
          );
        })}

        <h5 className='font-bold text-xl'>Total (INR) : {totalCartValue}/-</h5>
        <div className='flex gap-2 justify-end'>
          <Link to={'/checkout'} className='uppercase bg-blue-800 font-semibold hover:scale-105 text-white p-2 rounded-md shadow-xl'>Save and Checkout</Link>
          <button onClick={back} className='uppercase hover:scale-105 text-blue-800 font-semibold'>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
