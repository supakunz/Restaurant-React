import React from 'react'
import CartService from '../cartService/CartService'
import service_product from '../assets/service'

const Service = () => {
  return (
    <>
      <section className='bg-grayWhite'>
        <div className="container-section">
          <div className='grid grid-cols-2 md:grid-cols-4 gap-[1.2rem] py-[6rem]'>
            {service_product.map((item) => {
              return <CartService name={item.name} icon={item.icon} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Service