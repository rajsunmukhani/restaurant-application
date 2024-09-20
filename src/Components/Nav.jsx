import React, { useContext } from 'react';
import { ProductContext } from '../Context/Context';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [Products] = useContext(ProductContext);

  const totalProductsInCart = Products.reduce((total, product) => {
    return total + (product.qty || 0); 
  }, 0);

  return (
    <div className='h-5 p-8 text-white shadow-xl font-semibold text-2xl w-full bg-blue-800 flex items-center justify-between'>
      <h4>Food's Restaurant</h4>
      <Link to={'/summary'} className="ri-shopping-cart-fill relative">
        <span className='absolute bg-red-500 rounded-full text-white text-xs h-5 w-5 flex items-center justify-center top-0 right-0 transform translate-x-2/3'>{totalProductsInCart}</span>
      </Link>
    </div>
  );
};

export default Nav;
