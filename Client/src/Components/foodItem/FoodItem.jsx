import React from 'react'

const FoodItem = (props) => {
  return (
    <>
      <section>
        <div className='flex flex-col items-center text-center gap-y-3'>
          <img className='w-[180px]' src={props.image} alt="" />
          <p className='p-[5px_10px] text-white text-[12px] bg-yellow rounded-full'>{props.category}</p>
          <h3 className='text-[23px] font-medium'>{props.name}</h3>
          <p className='text-[16px] text-grayLight'>{props.details}</p>
          <p>{props.price} $</p>
          <div className='text-yellow flex gap-1'>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default FoodItem