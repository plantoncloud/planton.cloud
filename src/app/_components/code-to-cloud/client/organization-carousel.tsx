'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import { Autoplay, FreeMode, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/virtual';

const OrgImages = [
  'images/code-to-cloud/ghost.svg',
  'images/code-to-cloud/buffer.svg',
  'images/code-to-cloud/balsamiq.svg',
  'images/code-to-cloud/basecamp.svg',
  'images/code-to-cloud/trello.svg',
];
interface IOrganizationCarousel {
  className?: string;
  speed?: number;
  slidesPerView?: number;
  direction?: 'horizontal' | 'vertical';
  spaceBetween?: number | string;
  breakpoints?: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };
}
export const OrganizationCarousel: FC<IOrganizationCarousel> = ({
  speed = 5000,
  className,
  slidesPerView = 3,
  direction = 'horizontal',
  spaceBetween,
  breakpoints,
}) => {
  return (
    <Swiper
      className={className}
      modules={[Autoplay, FreeMode, Virtual]}
      spaceBetween={spaceBetween}
      speed={speed}
      effect="fade"
      slidesPerView={slidesPerView}
      direction={direction}
      autoplay={{
        delay: 2500,
        waitForTransition: false,
        disableOnInteraction: false,
      }}
      wrapperClass="flex items-center"
      breakpoints={breakpoints}
    >
      {[...OrgImages, ...OrgImages].map((src, index) => (
        <SwiperSlide key={index}>
          <Image width={0} height={0} alt="" className="w-fit" src={src} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
