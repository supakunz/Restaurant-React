import React, { useEffect, useRef } from 'react'
import logo_nav from '../assets/image/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const navRef = useRef()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navRef.current.classList.add('bg-blackBlue')
      } if (window.scrollY < 50) {
        navRef.current.classList.remove('bg-blackBlue')
      }
    })
  }, [])

  return (
    <>
      <nav ref={navRef} className='py-[5px] w-full fixed z-20 transition ease-linear duration-200'>
        <div className='flex items-center justify-between container-section'>
          <Link to={'/'} className='logo flex items-center gap-2'>
            <img className='w-[60px] ani' src={logo_nav} alt="" />
            <h1 className='text-[23px] text-white font-semibold'>RESTAURANT</h1>
          </Link>
          <div className="nav-menu flex text-[15px] text-white gap-[10px]">
            <ul className='flex items-center justify-center'>
              <Link to={'/'} className='p-[15px] hover:text-yellow transition duration-300'>HOME</Link>
              <Link to={'/about'} className='p-[15px] hover:text-yellow transition duration-300'>ABOUT</Link>
              <Link to={'/service'} className='p-[15px] hover:text-yellow transition duration-300'>SERVICE</Link>
              <Link to={'/menu'} className='p-[15px] hover:text-yellow transition duration-300'>MENU</Link>
              <div class="mx-auto flex w-full items-center justify-center">
                <div class="group relative cursor-pointer">
                  <div class="flex items-center justify-between gap-2 p-[15px]">
                    <a class="menu-hover text-base font-medium text-[16px] text-white group-hover:text-yellow" onClick="">
                      PAGES
                    </a>
                    <span className='group-hover:text-yellow'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="h-5 w-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </div>
                  <div
                    class="invisible opacity-0 absolute z-50 text-[15px] flex w-[9rem] top-[3.9rem] flex-col bg-gray-100 py-1 px-4 transition-all duration-300 text-gray-800 shadow-xl group-hover:visible group-hover:opacity-100">
                    <Link to={'/ourteam'} class="my-2 block border-b border-gray-100 py-1 text-gray-500 hover:text-black md:mx-2 ">
                      Our Team
                    </Link>
                    <Link to={'/testimonial'} class="my-2 block border-b border-gray-100 py-1 text-gray-500 hover:text-black md:mx-2">
                      Testimonial
                    </Link>
                    <Link to={'/booking'} class="my-2 block border-b border-gray-100 py-1 text-gray-500 hover:text-black md:mx-2">
                      Booking
                    </Link>
                  </div>
                </div>
              </div>
              <Link to={'/contact'} className='p-[15px] hover:text-yellow transition duration-300'>CONTACT</Link>
            </ul>
            <div className='flex gap-[15px] items-center'>
              <button className='p-[10px] bg-yellow border-soLinkd border-[1px] border-yellow rounded-md hover:bg-yellowHover transition duration-300'>Singup</button>
              <button className='p-[10px_15px] border-soLinkd border-[1px] border-yellow rounded-md hover:bg-yellowHover transition duration-300'>Login</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar