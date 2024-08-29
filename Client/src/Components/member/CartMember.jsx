import React from 'react'

const cartMember = (props) => {
  return (
    <>
      <div className='flex flex-col gap-2 bg-white py-[3rem] px-8 rounded-xl hover:bg-yellow hover:text-white group'>
        <p className='text-[20px] font-semibold'>{props.pack}</p>
        <p className='text-[17px]'><span className='text-[40px] font-semibold'>${props.price}</span> /Month</p>
        <p className='text-grayLight text-[15.5px] group-hover:text-white'>{props.detail}</p>
        <ul className='flex flex-col text-[17px] text-grayLight gap-5 mt-5 mb-6'>
          {props.pack == 'Base' ?
            <div className='text-[15.5px] group-hover:text-white'>
              <li className='flex items-start gap-3'><i class='bx bx-check text-green-600 text-[20px] pt-1'></i><p>{props.more[0]}</p></li>
              <li className='flex items-start gap-3'><i class='bx bx-check text-green-600 text-[20px] pt-1'></i><p>{props.more[1]}</p></li>
              <li className='flex items-start gap-3'><i class='bx bx-x text-red-600 text-[20px] pt-1' ></i><p>{props.more[2]}</p></li>
              <li className='flex items-start gap-3'><i class='bx bx-x text-red-600 text-[20px] pt-1' ></i><p>{props.more[3]}</p></li>
              <li className='flex items-start gap-3'><i class='bx bx-x text-red-600 text-[20px] pt-1' ></i><p>{props.more[4]}</p></li>
            </div>
            : props.pack == 'Intro' ?
              <div className='text-[15.5px] group-hover:text-white'>
                <li className='flex items-start gap-3'><i class='bx bx-check text-green-600 text-[20px] pt-1'></i><p>{props.more[0]}</p></li>
                <li className='flex items-start gap-3'><i class='bx bx-check text-green-600 text-[20px] pt-1'></i><p>{props.more[1]}</p></li>
                <li className='flex items-start gap-3'><i class='bx bx-check text-green-600 text-[20px] pt-1' ></i><p>{props.more[2]}</p></li>
                <li className='flex items-start gap-3'><i class='bx bx-x text-red-600 text-[20px] pt-1' ></i><p>{props.more[3]}</p></li>
                <li className='flex items-start gap-3'><i class='bx bx-x text-red-600 text-[20px] pt-1' ></i><p>{props.more[4]}</p></li>
              </div>
              : props.pack == 'Popular' ?
                <div className='text-[15.5px] group-hover:text-white'>
                  <li className='flex items-start gap-3'><i class='bx bx-check text-green-600 text-[20px] pt-1'></i><p>{props.more[0]}</p></li>
                  <li className='flex items-start gap-3'><i class='bx bx-check text-green-600 text-[20px] pt-1'></i><p>{props.more[1]}</p></li>
                  <li className='flex items-start gap-3'><i class='bx bx-check text-green-600 text-[20px] pt-1' ></i><p>{props.more[2]}</p></li>
                  <li className='flex items-start gap-3'><i class='bx bx-check text-green-600 text-[20px] pt-1' ></i><p>{props.more[3]}</p></li>
                  <li className='flex items-start gap-3'><i class='bx bx-x text-red-600 text-[20px] pt-1' ></i><p>{props.more[4]}</p></li>
                </div>
                : props.pack == 'Premium' ?
                  <div className='text-[15.5px] group-hover:text-white'>
                    <li className='flex items-start gap-3'><i class='bx bx-check text-green-600 text-[20px] pt-1'></i><p>{props.more[0]}</p></li>
                    <li className='flex items-start gap-3'><i class='bx bx-check text-green-600 text-[20px] pt-1'></i><p>{props.more[1]}</p></li>
                    <li className='flex items-start gap-3'><i class='bx bx-check text-green-600 text-[20px] pt-1' ></i><p>{props.more[2]}</p></li>
                    <li className='flex items-start gap-3'><i class='bx bx-check text-green-600 text-[20px] pt-1' ></i><p>{props.more[3]}</p></li>
                    <li className='flex items-start gap-3'><i class='bx bx-check text-green-600 text-[20px] pt-1' ></i><p>{props.more[4]}</p></li>
                  </div> : null
          }
        </ul>
        <button className='p-3 bg-yellow rounded-md group-hover:text-black group-hover:bg-white'>Choose Plan</button>
      </div>
    </>
  )
}

export default cartMember