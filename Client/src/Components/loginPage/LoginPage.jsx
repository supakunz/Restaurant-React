import React from 'react'
import show_image from '../assets/image/aboutImg1_1.jpg'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <section>
      <div className='container-section py-[100px]'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='relative'>
            <div class="h-full">
              <img className='h-full object-cover w-full' src={show_image} alt="" />
            </div>
          </div>
          <div className='flex flex-col gap-6 bg-blackBlue p-7 z-10'>
            <div className='text-center text-white text-[25px]'>
              <p className='text-yellow text' style={{ fontFamily: "Pacifico" }}>Register</p>
              <h1 className='text-[40px] font-semibold'>LOGIN</h1>
            </div>
            <form className='flex flex-col gap-6' action="">
              <input className='p-2 w-full focus:border-yellow border-[1px] border-solid focus:outline-none text-gray-400' type="email" name="" placeholder='Email...' required />
              <input className='p-2 w-full focus:border-yellow border-[1px] border-solid focus:outline-none' type="password" name="" placeholder='password...' required />
              <button className='p-3 bg-yellow text-white'>Sing Up</button>
              <p className='text-white'>Already have an account? <Link to={'/singup'} onClick={(e) => e.window.scrollY(0)} className='text-yellow cursor-pointer'>Login here</Link></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginPage