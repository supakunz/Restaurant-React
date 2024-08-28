import React from 'react'

const ContactPage = () => {
  return (
    <>
      <section>
        <div className='container-section'>
          <div className='grid grid-cols-3 gap-5'>
            <div className='flex flex-col gap-1 bg-white p-5'>
              <h1 className='text-[25px] text-yellow font-semibold'>Address</h1>
              <p><i class="bx bxs-map text-[18px] mr-[0.4rem]"></i>123 Street, New York, USA</p>
            </div>
            <div className='flex flex-col gap-1 bg-white p-5'>
              <h1 className='text-[25px] text-yellow font-semibold'>Phone</h1>
              <p><i class="bx bxs-map text-[18px] mr-[0.4rem]"></i>123 Street, New York, USA</p>
            </div>
            <div className='flex flex-col gap-1 bg-white p-5'>
              <h1 className='text-[25px] text-yellow font-semibold'>Email</h1>
              <p><i class="bx bxs-map text-[18px] mr-[0.4rem]"></i>123 Street, New York, USA</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage