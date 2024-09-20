import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='flex flex-col items-center gap-5 w-full h-screen items-center justify-center'>
      <h1 className='text-5xl w-1/3 text-zinc-600 text-center capitalize'>Welcome to food's Kitchen</h1>
      <Link to={'/home'} className='bg-blue-800 text-white py-2 px-2 text-1xl rounded-md shadow-xl'>Go To Menu</Link>
    </div>
  )
}

export default Welcome