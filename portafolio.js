import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay,Grid, } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


export const Brands = () => {
    return (
        <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, ]}
          className="mySwiper"
        >
          <SwiperSlide className="d-flex justify-content-center"><img src="/assets/mayer.png" /></SwiperSlide>
          <SwiperSlide><a target="_blank" href="https://react-bootstrap.github.io/components/alerts"><img src="/bootstrapreact.png" /></a></SwiperSlide>
          <SwiperSlide><a target="_blank" href="https://sass-lang.com/guide"><img src="/sass.png" /></a></SwiperSlide>
          <SwiperSlide><a target="_blank" href="https://www.w3schools.com"><img src="/w3schools.png" /></a></SwiperSlide>
          <SwiperSlide><a target="_blank" href="https://swiperjs.com/swiper-api"><img src="/swiper.png" /></a></SwiperSlide>
        </Swiper>
      </>
    )
}
export default Brands;