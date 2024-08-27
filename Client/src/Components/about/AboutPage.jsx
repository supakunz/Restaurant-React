import React from 'react'
import about_image_1 from '../assets/image/aboutImg1_1.jpg'
import about_image_2 from '../assets/image/aboutImg1_2.jpg'
import about_image_3 from '../assets/image/aboutImg1_3.jpg'
import about_image_4 from '../assets/image/aboutImg1_4.jpg'

const AboutPage = () => {
  return (
    <>
      <section className='bg-grayWhite'>
        <div className="container-section h-full lg:h-screen grid grid-cols-1 lg:grid-cols-2 py-[100px] gap-[3.5rem]">
          <div className="left-content grid grid-cols-2 gap-4">
            <div className='flex items-end'>
              <img className='object-cover h-[90%]' src={about_image_1} alt="" />
            </div>
            <div className='flex items-end pt-[53px] pr-[53px]'>
              <img className='object-cover h-[90%]' src={about_image_2} alt="" />
            </div>
            <div className='flex pb-[53px] pl-[53px]'>
              <img className='object-cover h-[90%]' src={about_image_3} alt="" />
            </div>
            <div>
              <img className='object-cover h-[90%]' src={about_image_4} alt="" />
            </div>
          </div>
          <div className="right-content flex flex-col justify-center">
            <h3 className='text-[25px] text-yellow text' style={{ fontFamily: "Pacifico" }}>About Us</h3>
            <h1 className='text-[35px] font-semibold mb-[20px]'>Welcome to CCW Restaurant</h1>
            <p className='text-[16px] text-grayLight mb-[20px]'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
            <p className='text-[16px] text-grayLight mb-[20px]'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <div className='grid grid-cols-2 mb-[50px] h-[60px] gap-3'>
              <div className='flex items-center border-solid border-l-[5px] border-yellow'>
                <p className='text-[50px] text-yellow font-semibold px-[20px]'>10</p>
                <div className='flex flex-col'>
                  <p className='text-[15px] text-grayLight'>Years of</p>
                  <p className='text-[16px] font-semibold'>EXPERIENCE</p>
                </div>
              </div>
              <div className='flex items-center border-solid border-l-[5px] border-yellow'>
                <p className='text-[50px] text-yellow font-semibold px-[20px]'>30</p>
                <div className='flex flex-col'>
                  <p className='text-[15px] text-grayLight'>Popular</p>
                  <p className='text-[16px] font-semibold'>MASTER CHEFS</p>
                </div>
              </div>
            </div>
            <div>
              <button className='p-[18px_36px] lg:p-[20px_40px] text-[15px] lg:text-[16px] bg-yellow text-white hover:bg-yellowHover'>Read More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage