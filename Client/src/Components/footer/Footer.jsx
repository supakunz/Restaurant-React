import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <>
      <section className='bg-blackBlue'>
        <div className='grid grid-cols-4 container-section text-white py-[40px]'>
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
            <div>contact</div>
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
            <input type="email" name="" id="" />
          </div>
        </div>
      </section >
    </>
  )
}

export default Footer