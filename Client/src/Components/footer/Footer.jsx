import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <>
      <section className='bg-blackBlue'>
        <div className='grid grid-cols-4 container-section text-white pt-[40px] pb-[70px]'>
          <div className='flex flex-col gap-5'>
            <h1 className='text-[25px] text-yellow textline' style={{ fontFamily: "Pacifico" }}>Company</h1>
            <ul className='text-[16px] inline-flex flex-col gap-[0.35rem]'>
              <Link to={'/'} ><span className='hover:text-yellow relative left-0 hover:left-[5px]' style={{ transition: "left 0.2s" }}><i class="bx bx-chevron-right mr-[0.4rem] text-[18px]"></i>Home</span></Link>
              <Link to={'/about'}><span className='hover:text-yellow relative left-0 hover:left-[5px]' style={{ transition: "left 0.2s" }}><i class="bx bx-chevron-right mr-[0.4rem] text-[18px]"></i>About Us</span></Link>
              <Link to={'/contact'}><span className='hover:text-yellow relative left-0 hover:left-[5px]' style={{ transition: "left 0.2s" }}><i class="bx bx-chevron-right mr-[0.4rem] text-[18px]"></i>Contact Us</span></Link>
              <Link to={'/'}><span className='hover:text-yellow relative left-0 hover:left-[5px]' style={{ transition: "left 0.2s" }}><i class="bx bx-chevron-right mr-[0.4rem] text-[18px]"></i>Reservation</span></Link>
              <Link to={'/'}><span className='hover:text-yellow relative left-0 hover:left-[5px]' style={{ transition: "left 0.2s" }}><i class="bx bx-chevron-right mr-[0.4rem] text-[18px]"></i>Privacy Policy</span></Link>
              <Link to={'/'}><span className='hover:text-yellow relative left-0 hover:left-[5px]' style={{ transition: "left 0.2s" }}><i class="bx bx-chevron-right mr-[0.4rem] text-[18px]"></i>Terms & Condition</span></Link>
            </ul>
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-[25px] text-yellow textline' style={{ fontFamily: "Pacifico" }}>Contact</h1>
            <ul className='text-[16px] flex flex-col gap-[0.35rem]'>
              <li><i class="bx bxs-map text-[18px] mr-[0.4rem]"></i>123 Street, New York, USA</li>
              <li><i class="bx bxs-phone text-[18px] mr-[0.4rem]"></i>+012 345 67890</li>
              <li><i class="fa fa-envelope text-[18px] mr-[0.4rem]"></i>info@example.com</li>
            </ul>
            <div className='text-[19px] flex gap-2'>
              <i class='bx bxl-twitter p-[0.5rem] rounded-full border-white border-solid border-[1px] hover:bg-white hover:text-yellow cursor-pointer' ></i>
              <i class='bx bxl-youtube p-[0.5rem] rounded-full border-white border-solid border-[1px] hover:bg-white hover:text-yellow cursor-pointer' ></i>
              <i class='bx bxl-facebook p-[0.5rem] rounded-full border-white border-solid border-[1px] hover:bg-white hover:text-yellow cursor-pointer' ></i>
              <i class='bx bxl-linkedin p-[0.5rem] rounded-full border-white border-solid border-[1px] hover:bg-white hover:text-yellow cursor-pointer'></i>
            </div>
          </div>
          <div className='flex flex-col'>
            <h1 className='text-[25px] text-yellow textline' style={{ fontFamily: "Pacifico" }}>Opening</h1>
            <div className='pt-[1.25rem] pb-[1rem] flex flex-col gap-[0.35rem]'>
              <p className='text-[19px]'>Mon - Saturday</p>
              <p className='text-[16px]'>09AM-09PM</p>
            </div>
            <div className='flex flex-col gap-[0.35rem]'>
              <p className='text-[19px]'>Sunday</p>
              <p className='text-[16px]'>10AM-08PM</p>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-[25px] text-yellow textline' style={{ fontFamily: "Pacifico" }}>Newsletter</h1>
            <p className='text-[16px]'>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <form className='relative' action="">
              <input className='text-[15px] text-black p-4 rounded-lg w-[90%]' type="email" name="" id="" placeholder='Your email' required />
              <button type='submit' className='p-[10px_20px] rounded-lg bg-yellow text-[15px] absolute top-[10%] right-[40px]'>SINGUP</button>
            </form>
          </div>
        </div>
        <div className='text-white text-[15px] flex items-center justify-between container-section border-solid border-[#555555b3] border-t-[1px] pt-4 pb-[4rem]'>
          <div>
            <p className='mb-2'>© CCW Kitchen, All Rights Reserved.</p>
            <p>Inspiration Design By : <span className='cursor-pointer text-yellow'>HTML Codex</span></p>
          </div>
          <div>
            <ul className='flex gap-3'>
              <li className='border-[#555555b3] border-solid border-r-[1px] px-5'>Home</li>
              <li className='border-[#555555b3] border-solid border-r-[1px] px-5'>Cookies</li>
              <li className='border-[#555555b3] border-solid border-r-[1px] px-5'>Help</li>
              <li className='px-5'>FAQs</li>
            </ul>
          </div>
        </div>
      </section >
    </>
  )
}

export default Footer