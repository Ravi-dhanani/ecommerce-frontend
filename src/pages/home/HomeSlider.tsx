"use client";

import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const images = [
  "https://plus.unsplash.com/premium_photo-1661353245572-5e41f6208de8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2xpZGVyfGVufDB8fDB8fHww",
  "https://media.geeksforgeeks.org/wp-content/uploads/20230306120634/unnamed.jpg",
  "https://media.geeksforgeeks.org/wp-content/uploads/20230306120634/unnamed.jpg",
  "https://media.geeksforgeeks.org/wp-content/uploads/20230306120634/unnamed.jpg",
];
export default function HomeSlider() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images?.map((item: string, index: number) => (
          <SwiperSlide key={index}>
            <div className="h-[550px] w-full">
              <img src={item} className="object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
