import React from 'react'
import logo_nav from '../assets/image/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='pt-[5px] bg-blue-900'>
        <div className='flex items-center justify-between max-w-[75vw] m-auto'>
          <div className='logo flex items-center gap-2'>
            <img className='w-[60px]' src={logo_nav} alt="" />
            <h1 className='text-[23px] text-white font-semibold'>RESTAURANT</h1>
          </div>
          <div className="nav-menu flex text-[15px] text-white gap-[30px]">
            <ul className='flex items-center justify-center'>
              <Link to={'/'} className='p-[15px]'>HOME</Link>
              <Link to={'/about'} className='p-[15px]'>ABOUT</Link>
              <Link to={'/service'} className='p-[15px]'>SERVICE</Link>
              <Link to={'/menu'} className='p-[15px]'>MENU</Link>
              <Link to={'/pages'} className='p-[15px]'>PAGES</Link>
              <Link to={'/contact'} className='p-[15px]'>CONTACT</Link>
            </ul>
            <div className='flex gap-[15px] items-center'>
              <button className='p-[10px] bg-yellow border-soLinkd border-[1px] border-yellow rounded-md'>Singup</button>
              <button className='p-[10px_15px] border-soLinkd border-[1px] border-yellow rounded-md'>Login</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar