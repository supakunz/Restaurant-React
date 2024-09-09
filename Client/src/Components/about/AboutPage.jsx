import React from 'react'
import about_image_1 from '../assets/image/aboutImg1_1.jpg'
import about_image_2 from '../assets/image/aboutImg1_2.jpg'
import about_image_3 from '../assets/image/aboutImg1_3.jpg'
import about_image_4 from '../assets/image/aboutImg1_4.jpg'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <>
      <section className='bg-grayWhite'>
        <div className="container-section grid grid-cols-1 md:grid-cols-2 my-[100px] gap-[3.5rem]">
          <div className="left-content grid grid-cols-2 min-h-[40vh] gap-4">
            <div className='flex items-end'>
              <img className='object-cover h-full' src={about_image_1} alt="" />
            </div>
            <div className='flex items-end pt-[20%] pr-[20%]'>
              <img className='object-cover h-full ' src={about_image_2} alt="" />
            </div>
            <div className='flex pb-[20%] pl-[20%]'>
              <img className='object-cover h-full' src={about_image_3} alt="" />
            </div>
            <div>
              <img className='object-cover h-full' src={about_image_4} alt="" />
            </div>
          </div>
          <div className="right-content flex flex-col justify-center">
            <h3 className='text-[21px] lg:text-[25px] text-yellow text' style={{ fontFamily: "Pacifico" }}>About Us</h3>
            <h1 className='text-[31px] lg:text-[35px] font-semibold mb-[20px]'>Welcome to GG Restaurant</h1>
            <p className='text-[14px] lg:text-[16px] text-grayLight mb-[20px]'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
            <p className='text-[14px] lg:text-[16px] text-grayLight mb-[20px]'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <div className='flex mb-[50px] h-[60px] gap-2'>
              <div className='flex flex-1 items-center border-solid border-l-[5px] border-yellow'>
                <p className='text-[45px] lg:text-[50px] text-yellow font-semibold px-[20px]'>10</p>
                <div className='flex flex-col'>
                  <p className='text-[14px] lg:text-[15px] text-grayLight'>Years of</p>
                  <p className='text-[14px] lg:text-[16px] font-semibold'>EXPERIENCE</p>
                </div>
              </div>
              <div className='flex flex-1 items-center border-solid border-l-[5px] border-yellow'>
                <p className='text-[50px] text-yellow font-semibold px-[20px]'>30</p>
                <div className='flex flex-col'>
                  <p className='text-[14px] lg:text-[15px] text-grayLight'>Popular</p>
                  <p className='text-[14px] lg:text-[16px] font-semibold'>MASTER CHEFS</p>
                </div>
              </div>
            </div>
            <div>
              <Link to={'/about'} onClick={() => window.scrollTo(0, 0)} className='p-[14px_28px] lg:p-[15px_30px] text-[14px] lg:text-[16px] bg-yellow text-white hover:bg-yellowHover'>Read More</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage