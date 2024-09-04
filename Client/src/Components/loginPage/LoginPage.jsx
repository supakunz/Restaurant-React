import React from 'react'
import show_image from '../assets/image/aboutImg1_1.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { checkUser } from '../../store/UserSlice'

const LoginPage = () => {

  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm()
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const onSubmit = (data) => {
    dispatch(checkUser(data))
    reset()
    if (token) {
      navigate('/');
      window.scrollTo(0, 0);
    }
  }

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
              <input className='p-2 w-full focus:border-yellow border-[1px] border-solid focus:outline-none text-gray-400' {...register("email")} type="email" name="email" placeholder='Email...' required />
              <input className='p-2 w-full focus:border-yellow border-[1px] border-solid focus:outline-none' type="password" {...register("password")} name="password" placeholder='password...' required />
              <button onClick={handleSubmit(onSubmit)} className='p-3 bg-yellow text-white'>Sing Up</button>
              <p className='text-white'>Already have an account? <Link to={'/singup'} onClick={(e) => e.window.scrollY(0)} className='text-yellow cursor-pointer'>Login here</Link></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginPage