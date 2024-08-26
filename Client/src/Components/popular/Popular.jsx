import React, { useRef, useState } from 'react';
import FoodItem from '../foodItem/FoodItem'
import PopularMenu from '../assets/popular'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Popular = () => {
  return (
    <>
      <section className='bg-grayWhite h-[110vh] py-[60px]'>
        <div className='container-section'>
          <div className='flex flex-col text-center mb-[100px]'>
            <p className='text-[20px] text-yellow text' style={{ fontFamily: "Pacifico" }}>Food Menu</p>
            <h1 className='text-[40px] font-semibold'>Most Popular Items</h1>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={40}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper h-[450px]"
          >
            {PopularMenu.map((item) => {
              return <SwiperSlide><FoodItem name={item.name} image={item.image} details={item.details} category={item.category} price={item.price} /></SwiperSlide>
            })}
          </Swiper>
          <div className='flex justify-center my-5'>
            <button className='p-[15px_30px] bg-yellow text-white text-[16px] hover:bg-yellowHover'>View More</button>
          </div>
        </div>
      </section >
    </>
  )
}

export default Popular