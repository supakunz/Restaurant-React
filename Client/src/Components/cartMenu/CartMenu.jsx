import React from 'react'

const CartMenu = (props) => {
  return (
    <section>
      <div className='flex flex-col items-center text-center p-4 gap-y-4 bg-white'>
        <img className='w-[110px]' src={props.image} alt="" />
        <p className='p-[5px_10px] text-blackBlue text-[12px] bg-yellow rounded-full'>{props.category}</p>
        <h3 className='text-[19px] text-blackBlue font-semibold'>{props.name}</h3>
        <p>{props.price} $</p>
        <div className='text-yellow flex gap-1'>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
        </div>
        <div className='flex gap-4'>
          <i class='bx bx-show-alt text-white text-[20px] p-[5px] bg-blackBlue rounded-md cursor-pointer transition ease-linear duration-100 hover:scale-[1.2] hover:text-yellowHover'></i>
          <i class='bx bx-cart-add text-white text-[20px] p-[5px] bg-blackBlue rounded-md cursor-pointer transition ease-linear duration-100 hover:scale-[1.2] hover:text-yellowHover' ></i>
          <i class='bx bx-heart text-white text-[20px] p-[5px] bg-blackBlue rounded-md cursor-pointer transition ease-linear duration-100 hover:scale-[1.2] hover:text-yellowHover' ></i>
        </div>
      </div>
    </section>
  )
}

export default CartMenu