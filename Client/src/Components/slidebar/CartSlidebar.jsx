import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCart } from '../../store/cartSlice'

const CartSlidebar = ({ name, category, price, image, position }) => {

  const dispatch = useDispatch()

  return (
    <>
      <div className='flex gap-5 items-center my-8'>
        <div>
          <img className='w-[3rem]' src={image} alt="" />
        </div>
        <div className='flex flex-col items-start gap-1 flex-1'>
          <p className='text-[15px]'>{name}</p>
          <p className='p-[3px_9px] text-blackBlue text-[11px] bg-yellow rounded-full'>{category}</p>
        </div>
        <p className='text-[15px]'>x 1</p>
        <p className='text-[15px]'>$ {price}</p>
        <i onClick={() => dispatch(removeCart(position))} className='bx bxs-trash bg-red-500 text-white text-[17px] p-2 rounded-md cursor-pointer hover:bg-red-400'></i>
      </div>
    </>
  )
}

export default CartSlidebar