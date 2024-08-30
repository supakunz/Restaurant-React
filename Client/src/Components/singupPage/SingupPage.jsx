import React from 'react'
import show_image from '../assets/image/aboutImg1_4.jpg'
import { Link } from 'react-router-dom'

const SingupPage = () => {
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
              <h1 className='text-[40px] font-semibold'>Sing Up</h1>
            </div>
            <form className='flex flex-col gap-6' action="">
              <div className='flex gap-6 mt-4'>
                <input className='p-2 w-full focus:border-yellow border-[1px] border-solid focus:outline-none' type="text" name="" placeholder='Firstname...' required />
                <input className='p-2 w-full focus:border-yellow border-[1px] border-solid focus:outline-none' type="text" name="" placeholder='Lastname...' required />
              </div>
              <div className='flex gap-6'>
                <input className='p-2 w-full focus:border-yellow border-[1px] border-solid focus:outline-none text-gray-400' type="email" name="" placeholder='Email...' required />
                <input className='p-2 w-full focus:border-yellow border-[1px] border-solid focus:outline-none' type="text" name="" placeholder='Phone(0000000000)...' required />
              </div>
              <input className='p-2 w-full focus:border-yellow border-[1px] border-solid focus:outline-none' type="password" name="" placeholder='password...' required />
              <div className='flex gap-4'>
                <input type="checkbox" name="" id="" required />
                <p className='text-white text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsa fuga.</p>
              </div>
              <button className='p-3 bg-yellow text-white'>Sing Up</button>
              <p className='text-white'>Create an account? <Link to={'/login'} onClick={(e) => e.window.scrollY(0)} className='text-yellow cursor-pointer'>Click here</Link></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingupPage