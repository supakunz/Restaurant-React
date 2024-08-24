import React from 'react'

const Hero = (props) => {
  return (
    <>
      <section>
        <div className='flex h-screen items-center justify-center container-section before:content-[""] before:absolute before:bg-[#0f172bcb] before:z-[-9] before:w-full before:h-screen'>
          <img className='absolute z-[-10] w-full h-screen object-cover' src={props.banner.bg_image} alt="" />
          <div className="left-contents flex-1">
            <h1 className='text-[65px] font-semibold leading-tight text-white'>{props.content}</h1>
            <p className='text-[16px] text-white leading-relaxed mt-2'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat ame</p>
            <div className="button-content flex gap-5 mt-5 text-white">
              <button className='p-[15px_30px] bg-yellow text-[16px] rounded-md hover:bg-yellowHover transition duration-300'>{props.button.text_1}</button>
              <button className='p-[15px_30px] border-solid border-yellow border-[1px] text-[16px] rounded-md hover:bg-yellowHover transition duration-300'>{props.button.text_2}</button>
            </div>
          </div>
          <div className="right-content flex-1">
            <div className="image-hero flex items-center justify-center">
              <img className='max-w-[450px] object-cover animate-spin-slow' src={props.banner.banner_image} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero