import React, { useContext } from 'react';
import { ProductContext } from '../Context/Context';

const QtyUpdateButton = ({ index, price }) => {
  const [Products, setProducts] = useContext(ProductContext);

  const addQty = () => {
    const copyProducts = [...Products];
    copyProducts[index].qty = copyProducts[index].qty ? copyProducts[index].qty + 1 : 1;
    copyProducts[index].cost = copyProducts[index].qty * price;
    setProducts(copyProducts);
    localStorage.setItem('orders', JSON.stringify(copyProducts));
  };

  const lessQty = () => {
    const copyProducts = [...Products];
    if (copyProducts[index].qty && copyProducts[index].qty > 0) {
      copyProducts[index].qty -= 1;
      copyProducts[index].cost = copyProducts[index].qty * price;
    } else {
      alert('Order quantity cannot be less than zero!');
    }
    setProducts(copyProducts);
    localStorage.setItem('orders', JSON.stringify(copyProducts));
  };

  return (
    <div className='flex gap-2 justify-center'>
      <button
        onClick={addQty}
        className='hover:scale-105 flex items-center justify-center cursor-pointer rounded-md bg-blue-800 text-white text-xl w-[20%] shadow-xl'
      >
        +
      </button>
      <button
        onClick={lessQty}
        className= {Products[index].qty ? 'flex hover:scale-105 items-center justify-center cursor-pointer rounded-md bg-[#C73341] text-white w-[20%] shadow-xl text-xl' : 'flex items-center justify-center cursor-pointer rounded-md bg-zinc-300 w-[20%] shadow-xl text-xl'}
         
      >
        -
      </button>
    </div>
  );
};

export default QtyUpdateButton;
