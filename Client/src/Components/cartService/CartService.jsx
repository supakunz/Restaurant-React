import React from 'react'

const CartService = (props) => {
  return (
    <>
      <div className="service-cart flex flex-col text-center p-[30px_20px] bg-white hover:bg-yellow group transition duration-200 hover:-translate-y-3 shadow-md">
        <i className={`bx ${props.icon} text-[60px] text-yellow group-hover:text-white`}></i>
        <h1 className='text-[20px] font-semibold my-[10px] group-hover:text-white'>{props.name}</h1>
        <p className='text-[16px] group-hover:text-white'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
      </div>
    </>
  )
}

export default CartService