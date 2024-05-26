'use client';

import React, { FC } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { plans } from '@/app/_utils/constants';
import { Plan } from '../../common';

interface IPricingCarousel {
  className?: string;
  spaceBetween?: number | string;
}

export const PricingCarousel: FC<IPricingCarousel> = ({ className, spaceBetween }) => {
  return (
    <Swiper
      className={className}
      modules={[Navigation]}
      spaceBetween={spaceBetween}
      effect="slide"
      slidesPerView="auto"
      centeredSlides={true}
      navigation
      initialSlide={1}
      loop={true}
      wrapperClass=""
    >
      {plans.map((plan, index) => (
        <SwiperSlide key={index}>
          <Plan {...plan} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
