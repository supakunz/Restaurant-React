import React, { useRef, useState } from 'react';
import hero_product from '../Components/assets/hero_product'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Hero from '../Components/hero/Hero';
import Service from '../Components/service/Service';

const Home = () => {
  return (
    <>
      <section>
        <Swiper
          centeredSlides={true}
          // loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {hero_product.map((item) => {
            return <SwiperSlide>
              <Hero content={item.content} button={item.button} banner={item.banner} />
            </SwiperSlide>
          })}
        </Swiper>
      </section>
      <Service />
    </>
  )
}

export default Home