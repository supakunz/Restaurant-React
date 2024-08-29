import React, { useRef } from 'react'
import video_image from '../assets/image/aboutImg1_3.jpg'
import video_cooking from '../assets/video/cooking.mp4'

const BookTable = () => {

  const shadowRef = useRef()
  const boxRef = useRef()

  const handlePlay = () => {
    shadowRef.current.classList.toggle('!opacity-100')
    shadowRef.current.classList.toggle('!z-30')
    boxRef.current.classList.toggle('!-top-0')
  }

  return (
    <section>
      <div className='container-section py-[100px]'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='showVideo relative'>
            <div class="h-full">
              <img className='h-full object-cover' src={video_image} alt="" />
            </div>
            <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] cursor-pointer z-10'>
              <div onClick={handlePlay} className='animationBtnPlay'><i class='bx bxs-right-arrow p-5 rounded-full bg-yellow text-[45px]'></i></div>
            </div>
          </div>
          <div className='flex flex-col gap-6 bg-blackBlue p-7'>
            <div className='text-center text-white text-[25px]'>
              <p className='text-yellow text' style={{ fontFamily: "Pacifico" }}>Reservation</p>
              <h1 className='text-[40px] font-semibold'>Book A Table Online</h1>
            </div>
            <div className='flex gap-6 mt-4'>
              <input className='p-2 w-full focus:border-yellow border-[1px] border-solid focus:outline-none' type="text" name="" placeholder='Your name...' />
              <input className='p-2 w-full focus:border-yellow border-[1px] border-solid focus:outline-none' type="email" name="" placeholder='Your email...' />
            </div>
            <div className='flex gap-6'>
              <input className='p-2 w-full focus:border-yellow border-[1px] border-solid focus:outline-none' type="date" name="" />
              <input className='p-2 w-full focus:border-yellow border-[1px] border-solid focus:outline-none' type="text" name="" placeholder='No of people' />
            </div>
            <textarea className='p-2 h-[70px] focus:border-yellow border-[1px] border-solid focus:outline-none' name="" id="" placeholder='Special Request' style={{ resize: "none" }}></textarea>
            <button className='p-3 bg-yellow text-white'>Book Now</button>
          </div>
        </div>
      </div>
      <div ref={shadowRef} className="fixed top-0 left-0 w-full h-full bg-[#000000ea] z-0 opacity-0 transition-all duration-300">
        <div ref={boxRef} className="flex items-center justify-center h-full relative -top-full transition-all ease-in-out duration-[0.4s]">
          <div onClick={handlePlay} className="text-white text-[40px] absolute top-7 right-8 cursor-pointer "><i className='bx bx-x bg-yellow p-2' ></i></div>
          <video className='w-[800px]' src={video_cooking} id="video" autoPlay loop muted></video>
        </div>
      </div>
    </section>
  )
}

export default BookTable