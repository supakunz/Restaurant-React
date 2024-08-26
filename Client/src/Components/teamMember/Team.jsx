import React from 'react'
import CartChefs from '../cartChefs/CartChefs'
import Teamchefs from '../assets/teamchef'

const Team = () => {
  return (
    <>
      <section className='bg-grayWhite py-[60px]'>
        <div className='container-section'>
          <div className='flex flex-col text-center mb-[60px]'>
            <p className='text-[20px] text-yellow text' style={{ fontFamily: "Pacifico" }}>Food Menu</p>
            <h1 className='text-[40px] font-semibold'>Our Master Chefs</h1>
          </div>
          <div className='grid grid-cols-4 gap-[1.6rem] pb-[50px] h-[350px]'>
            {Teamchefs.map((item) => (
              <CartChefs firstname={item.firstname} lastname={item.lastname} image={item.image} position={item.position} />
            ))}
          </div>
        </div>
      </section >
    </>
  )
}

export default Team