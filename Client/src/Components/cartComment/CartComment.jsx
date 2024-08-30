import React from 'react'

const CartComment = (props) => {
  return (
    <>
      <section>
        <div className='bg-white flex flex-col gap-2 p-[30px] border-solid border-[2px] rounded-xl shadow-md'>
          <i class="bx bxs-quote-left text-[40px] text-yellow"></i>
          <p className='text-[16px] text-grayLight mb-3'>{props.comment}</p>
          <div className='flex items-center gap-4'>
            <img className='w-[48px] h-[48px] rounded-full object-cover' src={props.image} alt="" />
            <div>
              <p className='text-[18px] font-semibold'>{props.username}</p>
              <p className='text-[14px] text-grayLight'>{props.MembershipLevel}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CartComment